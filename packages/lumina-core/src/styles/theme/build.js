/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs'
import path from 'path'
import StyleDictionary from 'style-dictionary'
import { STYLE_DICTIONAIRY_PLATFORMS } from './config/index.js'

const __dirname = import.meta.dirname
const BRANDS_FOLDER = fs.readdirSync(path.join(__dirname, 'tokens', 'brands'))
const BRANDS = BRANDS_FOLDER.filter(folder => !folder.startsWith('.')) // Exclude hidden folders

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
const getStyleDictionaryConfig = (brand, _platform) => {
  return {
    log: {
      verbosity: 'verbose',
    },
    source: [
      `${__dirname}/tokens/**/*.json`,
      // 'tokens/globals/**/*.json',
      // `tokens/platforms/${platform}/*.json`,
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${__dirname}/css/${brand}/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              showFileHeader: false, // If enabled, it will introduce changes on every npm run build locally
              outputReferences: true,
            },
          },
        ],
      },
    },
  }
}

console.log('Tokens build started for', BRANDS)

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS
BRANDS.map(function (brand) {
  STYLE_DICTIONAIRY_PLATFORMS.map(function (platform) {
    console.log('\n==============================================')
    console.log(`\nProcessing: [${platform}] [${brand}]`)

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform))
    sd.buildPlatform(platform)
  })
})

console.log('\n==============================================')
console.log('\nTokens: build completed!')
