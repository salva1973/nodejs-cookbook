const readline = require('node:readline/promises')

const COLORS = require('./colors.js')

async function greet() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  const name = await rl.question('What is your name?\n')
  console.log(`${COLORS.GREEN}Hello ${name}!${COLORS.RESET}`)
  rl.close()
}

greet()
