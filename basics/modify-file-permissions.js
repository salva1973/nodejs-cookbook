// https://nodejs.org/api/fs.html#fs_file_access_constants
// https://linux.die.net/man/1/chmod
// https://nodejs.org/api/fs.html#fs_file_modes
// https://mason.gmu.edu/~montecin/UNIXpermiss.htm

const fs = require('node:fs')
const file = './file.txt'

// Additionally grant write access to those in the same group
fs.chmodSync(
  file,
  fs.constants.S_IRUSR |
    fs.constants.S_IWUSR |
    fs.constants.S_IRGRP |
    fs.constants.S_IWGRP |
    fs.constants.S_IROTH
)

// Alternatively, we can pass the chmodSync() function an octal representation
// of file permissions, as is commonplace when using the Unix chmod
// command on the command line.

fs.chmodSync(file, 0o664) // Using octal representation
