// https://nodejs.org/docs/latest-v22.x/api/stream.html
// https://nodejs.org/api/events.html#events_class_eventemitter

const fs = require('node:fs')

const rs = fs.createReadStream('./file.txt')

rs.on('data', (data) => {
  console.log('Read chunk:', data.toString())
})

rs.on('end', () => {
  console.log('No more data.')
})
