import DOMPurify from 'isomorphic-dompurify'

const ALLOWED_TAGS = ['a', 'span', 'br', 'strong']
const ALLOWED_ATTR = ['href', 'target', 'rel', 'class']

export function sanitizeHtml(html: string | undefined): string {
  return DOMPurify.sanitize(html ?? '', { ALLOWED_TAGS, ALLOWED_ATTR })
}
