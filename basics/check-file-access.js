const fs = require('node:fs')
const path = require('node:path')

const COLORS = require('./colors.js')

// const filepath = path.join(process.cwd(), 'file.txt')

const file = process.argv[2]

// fs.exists()
//
// This method is deprecated and should not be used
// The reason is that it creates a race condition since
// other processes can change the file's state between
// the check and the actual operation

// Check if file exists (callback version)
// fs.access(filepath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.error(`${filepath} does not exist`)
//     return
//   }
//   console.log(`${filepath} exists`)
// })

// Check using stat
// fs.stat(filepath, (err, stats) => {
//   if (err) {
//     console.error(`${filepath} does not exist`)
//     return
//   }
//   console.log(`${filepath} exists`)
// })

// Promise-based version
async function checkFileExists(file) {
  try {
    await fs.promises.access(file, fs.constants.F_OK)
    return true
  } catch {
    return false
  }
}

// Using an async IIFE (Immediately Invoked Function Expression)
;(async () => {
  if (await checkFileExists(file)) {
    console.log(`${COLORS.GREEN}${file} exists${COLORS.RESET}`)
  } else {
    console.error(`${COLORS.RED}${file} does not exist${COLORS.RESET}`)
  }
})()
