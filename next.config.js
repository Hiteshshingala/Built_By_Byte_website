/** @type {import('next').NextConfig} */

// GitHub Pages: https://github.com/Hiteshshingala/Built_By_Byte_website
// Custom domain: https://builtbybyte.com/
// When using custom domain, site is served from root — no basePath needed.
// If using default GitHub Pages URL (username.github.io/Built_By_Byte_website),
// set basePath and assetPrefix to '/Built_By_Byte_website'.

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE_PATH ? process.env.GITHUB_PAGES_BASE_PATH : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE_PATH ? process.env.GITHUB_PAGES_BASE_PATH : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
