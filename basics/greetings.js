const COLORS = require('./colors.js')

console.log('What is your name?')

process.stdin.on('data', (data) => {
  // processing on each data event
  const name = data.toString().trim().toUpperCase()
  if (name !== '') {
    process.stdout.write(`${COLORS.GREEN}Hello ${name}!${COLORS.RESET}`)
  } else {
    process.stderr.write(`${COLORS.RED}Input was empty.${COLORS.RESET}\n`)
  }
})

// Alternative way with readline
// const readline = require('node:readline/promises')
// async function greet() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
//   const name = await rl.question('What is your name?\n')
//   console.log(`Hello ${name}!`)
//   rl.close()
// }
// greet()
