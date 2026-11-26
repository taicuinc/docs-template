const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[character]!);

// Links and `code` in a line of text from the site's configuration or the home page's content.
// A link to another site opens in a new tab, as links in the Markdown pages do.
export function inlineMarkdown(source: string): string {
  return escapeHtml(source)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(((?:[^()]|\([^()]*\))+)\)/g, (_match, text: string, href: string) =>
      /^https?:\/\//.test(href)
        ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
        : `<a href="${href}">${text}</a>`);
}
