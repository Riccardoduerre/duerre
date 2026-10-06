/**
 * Date formatting utilities for Duerre Media.
 * All numeric dates use Italian order (DD.MM.YYYY for blog posts, MM.YYYY for projects)
 * and remain consistent across both Italian and English locales.
 */

export interface ProjectDateLike {
  date?: string;
  year?: string;
}

/**
 * Formats a project date as MM.YYYY (numeric Italian order: month then year).
 * E.g. '2025-11-01' -> '11.2025'.
 */
export function formatProjectDate(project: ProjectDateLike): string {
  if (project.date) {
    const parts = project.date.split('-');
    if (parts.length >= 2) {
      const [year, month] = parts;
      return `${month.padStart(2, '0')}.${year}`;
    }
  }
  return project.year || '';
}

/**
 * Formats a blog post date as DD.MM.YYYY (numeric Italian order: day, month, year).
 * E.g. '2025-09-08' -> '08.09.2025'.
 * Will not invert for English locale.
 */
export function formatBlogDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
  }
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

