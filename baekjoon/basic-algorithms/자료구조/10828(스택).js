const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(input) {
    let stack = [],
        answer = '';
    
    const N = parseInt(input[0]);   
    for(let i = 1; i <= N; i++) {
        const command = input[i].split(' ')[0];
        switch(command) {
            case 'push':
                const X = parseInt(input[i].split(' ')[1]);
                stack.push(X);
                break;
            case 'pop':
                stack.length !== 0 ? answer += stack.pop() + '\n' : answer += '-1\n';
                break;
            case 'size':
                answer += stack.length + '\n';
                break;
            case 'empty':
                stack.length === 0 ? answer += '1\n' : answer += '0\n';
                break;
            case 'top':
                stack.length !== 0 ? answer += stack[stack.length - 1] + '\n' : answer += '-1\n';
                break;
        }
    }

    console.log(answer);
}

const input = [];
rl.on("line", function(line) {
    input.push( line )
}).on("close", function() {
    solution(input);
    process.exit();
});