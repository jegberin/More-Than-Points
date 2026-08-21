import type { GuideSource } from "@/lib/guides";
import type { ArticleSlug } from "@/lib/articles";

/**
 * Anything that can attribute a Discovery Call click — a guide, the quiz, or an
 * article. Kept in its own module so guides.ts and articles.ts stay independent
 * leaves and shared components depend on neither directly.
 */
export type ContentSource = GuideSource | ArticleSlug;
