import { renderToString } from "react-dom/server";
import App from "./App";

// Re-exported for scripts/prerender.mjs: article routes and the sitemap are
// derived from this, so publishing an article needs no build-script edit.
export { ARTICLES_NEWEST_FIRST } from "./lib/articles";

export function render(ssrPath: string): string {
  return renderToString(<App ssrPath={ssrPath} />);
}
