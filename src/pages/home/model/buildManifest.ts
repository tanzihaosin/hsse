import { z } from 'zod/v4'
import { homeBlockDefinitions } from './HomePage.blocks'
import { homeBlockSchemas } from './HomePage.schemas'

export function buildManifest(version: string) {
  return {
    project: 'hsse',
    version,
    blocks: homeBlockDefinitions.map(({ type, title, category, schemaVersion }) => {
      const schema = homeBlockSchemas[type]
      return {
        type, title, category, schemaVersion,
        readonly: !schema,
        aliases: [],
        ...(schema ? { schema: z.toJSONSchema(schema) } : {}),
      }
    }).toSorted((a, b) => a.type.localeCompare(b.type)),
  }
}
