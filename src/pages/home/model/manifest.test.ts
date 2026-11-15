import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { describe, expect, it } from 'vitest'
import { homePageData } from './HomePage.data'
import { homeBlockDefinitions } from './HomePage.blocks'
import { homeBlockSchemas } from './HomePage.schemas'
import { buildManifest } from './buildManifest'

const manifest = buildManifest(process.env.MANIFEST_VERSION ?? new Date().toISOString().slice(0, 10))

describe('манифест блоков hsse', () => {
  it('содержит уникальные типы всех блоков главной страницы', () => {
    const types = manifest.blocks.map(block => block.type)
    expect(new Set(types).size).toBe(homeBlockDefinitions.length)
    expect(new Set(homePageData.blocks.map(block => block.type)).difference(new Set(types)).size).toBe(0)
    expect(Object.keys(homeBlockSchemas).every(type => types.includes(type))).toBe(true)
  })

  it('описывает редактируемые блоки и помечает блоки без схемы', () => {
    for (const block of manifest.blocks) {
      expect(block.readonly).toBe(!('schema' in block))
    }
    expect(manifest.blocks.find(block => block.type === 'partners')?.readonly).toBe(true)
    expect(JSON.stringify(manifest)).toContain('"x-field":"richtext"')
    expect(JSON.stringify(manifest)).toContain('"x-field":"image"')
    expect(JSON.stringify(manifest)).toContain('"x-field":"link"')
  })

  it('принимает текущие данные каждого блока со схемой без потери полей', () => {
    for (const block of homePageData.blocks) {
      const schema = homeBlockSchemas[block.type]
      if (!schema) continue
      const result = schema.safeParse(block.data)
      expect(result.success, block.type).toBe(true)
      if (result.success) expect(result.data, block.type).toEqual(block.data)
    }
  })

  it.runIf(process.env.MANIFEST_OUT)('записывает манифест в файл', () => {
    const out = process.env.MANIFEST_OUT!
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, JSON.stringify(manifest, null, 2))
  })
})
