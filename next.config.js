/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActionsBodySizeLimit: '50mb',
  }
}

module.exports = nextConfig
