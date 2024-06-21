const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname)
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      type: 'asset/resource',
      include:  path.resolve(__dirname,"apps/lumina-core/.next/static/media" ),
      loader: 'url-loader',
    })
    return config
  },
  reactStrictMode: false,
}

module.exports = nextConfig
