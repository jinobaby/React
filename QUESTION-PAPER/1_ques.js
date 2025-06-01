const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter a string to reverse: ", function(input) {
    function reverseString(name) {
        return name.split('').reverse().join('')
    }
    console.log(reverseString(input));
    rl.close();
});


