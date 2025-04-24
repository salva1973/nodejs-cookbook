// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

const { Readable } = require('node:stream')

async function* generate() {
  yield 'Node.js'
  yield 'is'
  yield 'a'
  yield 'JavaScript'
  yield 'Runtime'
}

const readable = Readable.from(generate())

readable.on('data', (chunk) => {
  console.log(chunk)
})
