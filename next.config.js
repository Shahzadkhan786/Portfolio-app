/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    eslint: {
      dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
  }