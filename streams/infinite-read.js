const fs = require('node:fs')

const rs = fs.createReadStream('/dev/urandom')
// This file is a pseudo-random number generator which is available on
// Unix-like operating systems. It is not a real file.
// It is a special file that provides random bytes.
// The file is infinite. It will never end.

let size = 0
rs.on('data', (data) => {
  size += data.length
  console.log('File size:', size)
})
