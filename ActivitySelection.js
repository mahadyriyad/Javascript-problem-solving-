function main(input) {
    const lines = input.split('\n');
    const N = parseInt(lines[0]);

    let activities = [];

    for (let i = 1; i <= N; i++) {
        let [start, end] = lines[i].split(' ').map(Number);
        activities.push([start, end]);
    }

    // Sort activities by finish time
    activities.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = -1;

    for (let i = 0; i < N; i++) {
        if (activities[i][0] >= lastEnd) {
            count++;
            lastEnd = activities[i][1];
        }
    }

    console.log(count);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
