const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(input) {
    const N = parseInt(input[0]);
    for(let i = 1; i < N; i++) {
        const sum = i + String(i).split('').map(e => parseInt(e)).reduce((a, b) => a + b);
        if(sum === N) {
            console.log(i);
            return;
        }
    }
    console.log(0);
}

const input = [];
rl.on("line", function(line) {
    input.push( line )
}).on("close", function() {
    solution(input);
    process.exit();
});