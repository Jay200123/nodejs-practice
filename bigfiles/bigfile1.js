const {writeFileSync} = require('fs');

for(i = 0; i < 1000; i++){
    writeFileSync('./testpath/bigfile1.txt', `counting ${i}\n`, { flag: 'a' })
}