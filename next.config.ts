import type { NextConfig } from "next";

function pagesBasePath() {
  const value = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!value || value === "/") return "";
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

const basePath = pagesBasePath();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
