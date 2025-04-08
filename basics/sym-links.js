// ln -s file.txt link-to-file

const fs = require('node:fs')

const COLORS = require('./colors.js')

const file = process.argv[2]

try {
  const fileStats = fs.lstatSync(file)
  // console.log(
  //   `${COLORS.YELLOW}${JSON.stringify(fileStats, null, 2)}${COLORS.RESET}`
  // )
  // Using console.dir with color options
  console.dir(fileStats, {
    colors: true, // Enable colors in output
    depth: null, // Show all nesting levels
    maxArrayLength: null, // Show full arrays
  })
} catch (err) {
  console.error(`${COLORS.RED}Error reading file path: ${file}${COLORS.RESET}`)
}
