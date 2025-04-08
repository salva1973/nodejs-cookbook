// The fs module generally provides APIs that are modeled around Portable Operating System
// Interface (POSIX) functions. The fs module includes APIs that facilitate the reading of
// directories and file metadata.

const fs = require('node:fs')

const file = process.argv[2]

function printMetadata(file) {
  try {
    const fileStats = fs.statSync(file)
    console.log(fileStats)
  } catch (err) {
    console.error('Error reading file path:', file)
  }
}

printMetadata(file)

// node fetch-metadata.js ./file.txt
