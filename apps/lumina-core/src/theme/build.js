// build.js
const fs = require('fs')
const path = require('path')

const StyleDictionaryPackage = require('style-dictionary')

const STYLE_DICTIONAIRY_PLATFORMS = require('./config')

const BRANDS_FOLDER = fs.readdirSync(path.join(__dirname, 'tokens', 'brands'))

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, _platform) {
  return {
    source: [
      `${__dirname}/tokens/**/*.json`
      // `${__dirname}/tokens/brands/${brand}/*.json`,
      // `${__dirname}/tokens/platforms/${platform}/*.json`
    ],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: `${__dirname}/scss/${brand}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: {
              showFileHeader: false, // If enabled, it will introduce changes on every npm run build locally
              outputReferences: true
            }
          }
        ]
      }
    }
  }
}

console.log('Tokens: build started...')

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

BRANDS_FOLDER.forEach(brand => {
  STYLE_DICTIONAIRY_PLATFORMS.forEach(platform => {
    console.log('\n==============================================')
    console.log(`\nProcessing: [${platform}] [${brand}]`)

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform)
    )

    StyleDictionary.buildPlatform(platform)

    console.log('\nEnd processing')
  })
})

console.log('\n==============================================')
console.log('\nTokens: build completed!')
