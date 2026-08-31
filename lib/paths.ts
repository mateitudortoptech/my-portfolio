export function getBasePath() {
  const value = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!value || value === "/") return "";
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function withBasePath(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return `${getBasePath()}${href}`;
}
