function main(input) {
    const [minute, fps] = input.split(" ").map(Number);
    console.log(minute * 60 * fps);
}

let input = "";
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => { main(input.trim()); });

