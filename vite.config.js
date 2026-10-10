import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { allPaths } from "./src/routes.js";

// github pages has no rewrites, so every route gets its own copy of index.html
function routePages() {
  return {
    name: "route-pages",
    apply: "build",
    closeBundle() {
      const dist = "dist";
      const html = readFileSync(join(dist, "index.html"));
      for (const path of allPaths()) {
        if (path === "/") continue;
        const dir = join(dist, path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), html);
      }
      cpSync(join(dist, "index.html"), join(dist, "404.html"));
    },
  };
}

// github.io serves the site under the repo name until a custom domain (public/CNAME) is set
function basePath() {
  if (existsSync("public/CNAME")) return "/";
  const repo = process.env.GITHUB_REPOSITORY;
  return repo ? `/${repo.split("/")[1]}/` : "/";
}

export default defineConfig({
  base: basePath(),
  plugins: [react(), routePages()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
