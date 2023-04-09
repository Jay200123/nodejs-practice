const { readFile, writeFile } = require('fs')


console.log('started a task')
//finds the file and read its content
readFile('./testpath/subpath/test.txt', 'utf-8', (err, result)=>{

    if(err){
        console.log(err)
        return
    }

    //creates a first variable and passes the result
    const first = result

    //finds the file and read its content
    readFile('./testpath/test2.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }

        //creates a seconds variable and passes the result
        const second = result

        //performs a writeFile function where the value to be written are to be getting in the variable first and seconds
        writeFile('./testpath/test2-result.txt', `If You Find these message in the test2-result.txt file you have successfully pass the message ${first}, ${second}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return
            }

            console.log('file successfully created')
            console.log('task completed successfully')

        })
    })
})
 
console.log('starting next task')