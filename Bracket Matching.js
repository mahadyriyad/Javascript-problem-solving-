function main(input) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of input) {
        // If opening bracket, push to stack
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        // If closing bracket
        else if (ch === ')' || ch === '}' || ch === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[ch]) {
                console.log("Brackets are not balanced.");
                return;
            }
        }
    }

    // Final check
    if (stack.length === 0) {
        console.log("Brackets are balanced.");
    } else {
        console.log("Brackets are not balanced.");
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
