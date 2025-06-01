const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Enter the number', function (input){

    const arr = input.split(' ').map(Number)
    const counts = {};
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
    
        if (counts[num]) {
            counts[num]+= 1;
        }
        else {
            counts[num] = 1;
        }
    }
    console.log(counts);
    rl.close();
})
