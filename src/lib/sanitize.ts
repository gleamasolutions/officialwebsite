const HTML_TAG_REGEX = /<[^>]*>/g;
const CONTROL_CHAR_REGEX = /[\u0000-\u001F\u007F]/g;

export function sanitizeText(value: string, maxLength = 5000): string {
  return value
    .replace(HTML_TAG_REGEX, "")
    .replace(CONTROL_CHAR_REGEX, "")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeEmail(value: string): string {
  return sanitizeText(value, 254).toLowerCase();
}

export function sanitizePhone(value: string): string {
  return sanitizeText(value, 30).replace(/[^\d+\s()-]/g, "");
}
