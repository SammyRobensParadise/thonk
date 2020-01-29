var WordPOS = require('wordpos'),
  wordpos = new WordPOS()
const THONK = 'thonk'
const THONKING = 'thonking'
module.exports.thonkify = async (string) => {
  let stringToManipulate = string.trim().split(' ')
  let response = await wordpos.getPOS(string)
  for (let i = 0; i < stringToManipulate.length; i++) {
    if (response.nouns.includes(stringToManipulate[i])) {
      stringToManipulate[i] = THONKING
    }
    if (response.verbs.includes(stringToManipulate[i])) {
      stringToManipulate[i] = THONK
    }
  }
  return stringToManipulate.join(' ')
}
