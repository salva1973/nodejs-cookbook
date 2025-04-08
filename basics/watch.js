// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

const fs = require('node:fs')
const path = require('node:path')

const COLORS = require('./colors.js')

const file = path.join(process.cwd(), 'file.txt')

// Set options for watching (by default the poll would be every 5007ms)
const watchOptions = {
  interval: 1000, // Check every 1 second (in milliseconds)
  persistent: true, // Keep the process running
}

fs.watchFile(file, watchOptions, (current, previous) => {
  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(current.mtime)

  return console.log(`${COLORS.BLUE}${file} updated
${formattedTime}${COLORS.RESET}`)
})

// Using fs.watch instead of fs.watchFile
// fs.watch(file, (eventType, filename) => {
//   const formattedTime = new Intl.DateTimeFormat('en-GB', {
//     dateStyle: 'full',
//     timeStyle: 'long',
//   }).format(new Date())

//   console.log(`${COLORS.BLUE}Event: ${eventType}
// File: ${filename}
// Time: ${formattedTime}${COLORS.RESET}`)
// })

console.log(`${COLORS.YELLOW}Watching ${file} for changes...${COLORS.RESET}`)

// The Node.js fs module provides another function, watch(), which watches for changes in files but
// can also watch for directories. This function differs from watchFile() as it utilizes the operating
// system’s underlying file system notification implementation rather than polling for changes.

// Although faster and more reliable than the watchFile() API, the Watch API is not consistent
// across various platforms. This is because the Watch API is dependent on the underlying operating
// system’s method of notifying file system changes.

// Important note
// The moment.js library was once a go-to library for date manipulation and formatting in
// JavaScript. However, with the advancement of modern JavaScript, built-in functionalities such
// as Intl.DateTimeFormat offers similar capabilities natively. Additionally, moment.
// js has been put into maintenance mode by its maintainers, meaning no new features will be
// added. Coupled with concerns about its bundle size, many developers are finding moment.
// js no longer necessary for their projects and are instead using built-in functionalities or more
// modern alternative libraries.
