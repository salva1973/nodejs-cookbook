# Node.js Cookbook

## Installing Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/
install.sh | bash

source ~/.zshrc

nvm --version

nvm install 22
node --version
npm --version

nvm install 20
nvm use 22
nvm alias default <version> # the version used when you open the terminal

nvm install --lts # aliases
nvm uninstall <version>

# Under the hood, the nvm install script does the following:
# 1. Clones the nvm GitHub repository (https://github.com/nvm-sh/nvm) to ~/.nvm/.
# 2. Attempts to add some source lines to import and load nvm into
# the appropriate profile file, where the profile file is either
# ~/.bash_profile, ~/.bashrc, ~/.profile, or ~/.zshrc.
#
# . nvm will store all Node.js versions it has installed in the
# ~/.nvm/versions/node/ directory.

# These lines should be automatically added to your profile file
[`.zshrc`]

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.
nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## Documentation

[Index | Node.js v23.10.0 Documentation](https://nodejs.org/api/)

[node/doc/changelogs/CHANGELOG_V22.md at main · nodejs/node](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V22.md)

## Node.js 22 new syntax

```javascript
// REPL
process.versions.v8

// Strings
'006E006F00640065'.isWellFormed()
const number = 123456.789

// Formatting
new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(
  number
)
```

## Event Loop

[libuv: the library that powers event loop](https://libuv.org)

```javascript
console.log('Start')

process.nextTick(() => {
  console.log('Callback scheduled with process.nextTick #1')
})

setTimeout(() => {
  console.log('setTimeout #1 callback')
}, 0)

process.nextTick(() => {
  console.log('Callback scheduled with process.nextTick #2')
})

console.log('End')
```

## I/O

`greetings.js`

```javascript
console.log('What is your name?')

process.stdin.on('data', (data) => {
  // processing on each data event
  const name = data.toString().trim().toUpperCase()
  if (name !== '') {
    process.stdout.write(`Hello ${name}!`)
  } else {
    process.stderr.write('Input was empty.\n')
  }
})
```

## Watch (to replace Nodemon)

[Watch](https://nodejs.org/dist/latest-v22.x/docs/api/cli.html#--watch)

```bash
node --watch app.js
node --watch-path=./src --watch-path=./test app.js
```
