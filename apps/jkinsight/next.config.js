/** @type {import('next').NextConfig} */

const withPreact = require("next-plugin-preact")

const nextConfig = {
  assetPrefix: "./",
  reactStrictMode: true,
  compress: true,
}

module.exports = withPreact(nextConfig)
