import type { ComponentType } from "react";
import NotFound from "@/pages/not-found";
import ArticleLayout from "@/components/article/ArticleLayout";
import { ARTICLES, type ArticleSlug } from "@/lib/articles";
import LeavingCertResults2026 from "@/articles/leaving-cert-results-2026";

/**
 * Every slug in ArticleSlug needs a body here. The Record type turns a missing
 * one into a typecheck failure rather than a silent 404 in production.
 */
const ARTICLE_BODIES: Record<ArticleSlug, ComponentType> = {
  "leaving-cert-results-2026": LeavingCertResults2026,
};

export default function ArticlePage({ slug }: { slug: string }) {
  if (!(slug in ARTICLES)) return <NotFound />;
  const key = slug as ArticleSlug;
  const Body = ARTICLE_BODIES[key];
  return (
    <ArticleLayout slug={key}>
      <Body />
    </ArticleLayout>
  );
}
