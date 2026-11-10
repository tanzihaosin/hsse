export function describedBy(external: unknown, ...internal: (string | undefined | false)[]): string | undefined {
  const ids = [typeof external === 'string' ? external : '', ...internal].filter(Boolean)
  return ids.join(' ') || undefined
}
