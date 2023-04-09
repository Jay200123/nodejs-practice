const path = require('path')

const FilePath = path.join('/testpath', 'subpath', 'test.txt')
console.log(FilePath)

const base = path.basename(FilePath)
console.log(base)

const resolve = path.resolve(__dirname, 'testpath', 'subpath', 'test.txt')
console.log(resolve)
