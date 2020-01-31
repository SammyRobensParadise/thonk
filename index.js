var WordPOS = require('wordpos'),
  wordpos = new WordPOS()
const THONK = 'thonk'
const THONKING = 'thonking'
const BIG = 'big'
const CHONKEY = 'chonkey'
module.exports.thonkify = async (string) => {
  let stringToManipulate = string.trim().split(' ')
  let response = await wordpos.getPOS(string)
  for (let i = 0; i < stringToManipulate.length; i++) {
    if (
      response.nouns.includes(stringToManipulate[i]) &&
      !response.adjectives.includes(stringToManipulate[i])
    ) {
      stringToManipulate[i] = THONKING
    }
    if (response.verbs.includes(stringToManipulate[i])) {
      stringToManipulate[i] = THONK
    }
  }
  return stringToManipulate.join(' ')
}
module.exports.chonkify = async (string) => {
  const TYPE_MEASUERE_DISTANCE = 3
  let stringToManipulate = string.trim().split(' ')
  let stringsOfSyns = []
  let response = await wordpos.lookup(BIG)
  response.forEach((element) => {
    stringsOfSyns = stringsOfSyns.concat(element.synonyms)
  })
  stringsOfSyns = [...new Set(stringsOfSyns)]
  stringsOfSyns.forEach((element) => {
    element.includes('(p)') || element.includes('(a)')
      ? (element = element.slice(0, element.length - TYPE_MEASUERE_DISTANCE))
      : (element = element)
  })
  for (let i = 0; i < stringToManipulate.length; i++) {
    if (stringsOfSyns.includes(stringToManipulate[i])) {
      stringToManipulate[i] = CHONKEY
    }
  }
  return stringToManipulate.join(' ')
}
