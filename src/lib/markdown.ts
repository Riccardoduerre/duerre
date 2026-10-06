import { marked } from 'marked';

export function renderMarkdown(markdown: string) {
  const content = markdown.replace(/^\uFEFF?(?:[ \t]*\r?\n)*#[ \t]+.+(?:\r?\n|$)/, '');
  return marked.parse(content);
}
