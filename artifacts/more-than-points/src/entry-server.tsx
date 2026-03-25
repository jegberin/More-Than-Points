import { renderToString } from "react-dom/server";
import App from "./App";

export function render(ssrPath: string): string {
  return renderToString(<App ssrPath={ssrPath} />);
}
