"use strict";
// build.js
var fs = require('fs');
var path = require('path');
var StyleDictionaryPackage = require('style-dictionary');
var STYLE_DICTIONAIRY_PLATFORMS = require('./config');
var BRANDS_FOLDER = fs.readdirSync(path.join(__dirname, 'tokens', 'brands'));
// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(brand, _platform) {
    return {
        source: [
            "".concat(__dirname, "/tokens/**/*.json")
            // `${__dirname}/tokens/brands/${brand}/*.json`,
            // `${__dirname}/tokens/platforms/${platform}/*.json`
        ],
        platforms: {
            css: {
                transformGroup: 'css',
                buildPath: "".concat(__dirname, "/css/").concat(brand, "/"),
                files: [
                    {
                        destination: 'tokens.css',
                        format: 'css/variables',
                        options: {
                            showFileHeader: false, // If enabled, it will introduce changes on every npm run build locally
                            outputReferences: true
                        }
                    }
                ]
            }
        }
    };
}
console.log('Tokens: build started...');
// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS
BRANDS_FOLDER.forEach(function (brand) {
    STYLE_DICTIONAIRY_PLATFORMS.forEach(function (platform) {
        console.log('\n==============================================');
        console.log("\nProcessing: [".concat(platform, "] [").concat(brand, "]"));
        var StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));
        StyleDictionary.buildPlatform(platform);
        console.log('\nEnd processing');
    });
});
console.log('\n==============================================');
console.log('\nTokens: build completed!');
