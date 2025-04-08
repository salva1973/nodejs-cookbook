const fs = require('node:fs/promises')
const path = require('node:path')

const filepath = path.join(process.cwd(), 'hello.txt')

// Promises
// fs.readFile(filepath, 'utf8').then((contents) => {
//   console.log('File Contents:', contents)
// })

// Async/Await
// With ECMAScript modules instead of CommonJS modules, you can use the top-level await feature.
// This allows you to use await at the top level of your module without wrapping it in an async function.
// This feature is available in Node.js version 14.8.0 and later.
// However, in this example, we are using an async function to handle the asynchronous file reading.
// This is a more traditional way to handle asynchronous code in JavaScript, especially in older versions of Node.js.

async function run() {
  try {
    const contents = await fs.readFile(filepath, 'utf8')
    console.log('File Contents:', contents)
  } catch (error) {
    console.error(error)
  }
}

run()
