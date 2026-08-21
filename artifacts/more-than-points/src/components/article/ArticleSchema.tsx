import { ARTICLES, type ArticleSlug } from "@/lib/articles";
import { CONTACT, SOCIALS } from "@/lib/contact";

const ORIGIN = CONTACT.siteUrl.replace(/\/$/, "");
const linkedin = SOCIALS.find((s) => s.id === "linkedin");

/**
 * BlogPosting JSON-LD. Rendered at render time (not in an effect) so it lands
 * in the prerendered HTML where crawlers actually see it.
 */
export default function ArticleSchema({ slug }: { slug: ArticleSlug }) {
  const article = ARTICLES[slug];
  const url = `${ORIGIN}/articles/${article.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.updatedDate ?? article.publishDate,
    author: {
      "@type": "Person",
      name: "Angela O'Sullivan",
      url: `${ORIGIN}/about`,
      ...(linkedin ? { sameAs: linkedin.url } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "More Than Points",
      url: CONTACT.siteUrl,
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo-morethanpoints.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${ORIGIN}${article.image ?? "/opengraph.jpg"}`],
    inLanguage: "en-IE",
    ...(article.tags?.length ? { keywords: article.tags.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Escaping "<" guards against a "</script>" sequence appearing in copy.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }}
    />
  );
}
