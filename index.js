var WordPOS = require('wordpos'),
  wordpos = new WordPOS()
const THONK = 'thonk'
const THONKING = 'thonking'
var valueToReturn = 'null'
module.exports.thonkify = async (string) => {
    let r;
  manipulate(string).then((result) => {
      console.log(result)
     r = result
  })
  console.log(r)
  return r
}
const manipulate = async (string) => {
  let stringToManipulate = string.trim().split(' ')
  let stringToReturn
  await Promise.all(
  wordpos.getPOS(string, (data) => {
    for (let i = 0; i < stringToManipulate.length; i++) {
      if (data.nouns.includes(stringToManipulate[i])) {
        stringToManipulate[i] = THONKING
      }
      if (data.verbs.includes(stringToManipulate[i])) {
        stringToManipulate[i] = THONK
      }
    }
    valueToReturn = stringToManipulate.join(' ')
    console.log(valueToReturn)
  })
  )
  return valueToReturn
}
