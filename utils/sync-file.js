const { readFileSync, writeFileSync } = require('fs')

//for reading files
const first = readFileSync('./testpath/subpath/test.txt', 'utf-8')
console.log(first)
const second = readFileSync('./testpath/test2.txt', 'utf-8')
console.log(second)

//writing files

writeFileSync('./testpath/test-result.txt', `${first}, ${second}`, {flag: 'a'})