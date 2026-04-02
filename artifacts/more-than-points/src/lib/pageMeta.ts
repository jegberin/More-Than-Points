export function setPageMeta(title: string, description: string, path?: string): void {
  document.title = title;

  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  const canonicalPath = (path ?? window.location.pathname.replace(/\/$/, "")) || "/";
  const canonicalHref = `https://morethanpoints.ie${canonicalPath === "/" ? "/" : canonicalPath}`;

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalHref;
}
