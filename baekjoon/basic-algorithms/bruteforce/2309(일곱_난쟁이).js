const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(input) {
    let trueDwarves = [];
    let spy_1 = 0, spy_2 = 0;
    const DWARVES = 9;
    Loop1:
    for(let i = 0; i < DWARVES - 1; i++) {
        Loop2:
        for(let j = i + 1; j < DWARVES; j++) {
            let heightSum = 0;
            for(let k = 0; k < DWARVES; k++) {
                if(k !== i && k !== j) heightSum += input[k];
            }
            if(heightSum === 100) {
                spy_1 = i;
                spy_2 = j;
                break Loop1;
            }
        }
    }
    for(let i = 0; i < DWARVES; i++) {
        if(i !== spy_1 && i !== spy_2) trueDwarves.push(input[i]);
    }
    trueDwarves.sort((a, b) => a - b).forEach(e => console.log(e));
}

const input = [];
rl.on("line", function(line) {
    input.push( line )
}).on("close", function() {
    solution(input.map(e => parseInt(e)));
    process.exit();
});