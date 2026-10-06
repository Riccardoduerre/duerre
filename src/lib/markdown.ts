import { marked } from 'marked';

export function renderMarkdown(markdown: string): string {
  const content = markdown.replace(/^\uFEFF?(?:[ \t]*\r?\n)*#[ \t]+.+(?:\r?\n|$)/, '');
  return marked.parse(content, { async: false }) as string;
}
