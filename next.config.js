const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader',
    });
    return config;
   },
   reactStrictMode: false,
   ignoreBuildErrors: true,
}

module.exports = nextConfig


const object = { y: {data: "y1", children: {x: {data: "x1"}}}}


const directObject = {}

function recursiveMapping (object)  {
  Object.keys(object).map(
    (componentId) => {
      console.log(componentId)
      directObject[componentId] = object[componentId]
      const keys = Object.keys(object[componentId].children || {})
      if (keys.length > 0) {
        recursiveMapping(object[componentId].children)
      }
    }
  )
}

recursiveMapping(object)

console.log(directObject)