/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    domains: ['localhost'],
  },
  // Ensure proper handling of static assets
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = nextConfig