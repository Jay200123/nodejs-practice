const { writeFileSync } = require('fs')

for(i = 0; i < 1000; i++){

    writeFileSync('./testpath/bigfile2.txt', `Counting ${i}\n`, {flag: "a"})
}