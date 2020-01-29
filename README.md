# Thonk.js
An npm package for when you just gotta thonk
## Why? 
Have you ever just feel the need to THONK? well look no further! Join me on my journey with this gross misuse of  natural language processing to replace every appropriate verb and adjective in a string with the words THONK or THONKING!

# Usage
## Install 

`npm install thonk`

## Example
```js
const thonk = require('thonk')
const string= "going to the park while walking eat"
thonk.thonkify(sting).then(data => console.log(data))
// will output:
// thonking to the thonking while thonking thonk
```
## api
`thonk.thonkify(string,callback)`\
Returns a thonked strinig
