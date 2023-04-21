const { writeFileSync } = require('fs');

for(i = 0; i < 1000; i++){

    writeFileSync('./testpath/bigfile3.txt', `Hello User${i}\n`, { flag: 'a'});
}