# Thonk.js
An npm package for when you just gotta thonk
## Why Tho ⁉️
Have you ever just feel the need to THONK? well look no further! Join me on my journey with this gross misuse of  natural language processing to replace every appropriate verb and adjective in a string with the words THONK or THONKING! 🤯🥳💯

# Usage
## Install 

`npm install --save thonk`

## Example
```js
const thonk = require('thonk')
const string= "going to the park while walking eat"
thonk.thonkify(sting).then(data => console.log(data))
// will output:
// thonking to the thonking while thonking thonk
```
## API
`thonk.thonkify(string,callback)`\
Returns a <b>thonked</b> string\
Note: Because I am using an NLP (natural language processing) API to detect the words to replace, call are `async` and must be treated as such.

## Contributing

I welcome any contributions to this project! If you want to make a contribution feel free to open a pull request on github!

## Contact
Email: srobensparadise@gmail.com\
Website: [sammyrp.com](httpsL//sammyrp.com)\
Portfolio: [sammy.world](https://sammy.world)