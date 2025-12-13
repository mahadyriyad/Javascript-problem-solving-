function main(input) {
    let data = input.split(/\s+/).map(Number);

    let idx = 0;
    let N = data[idx++];
    let arr = [];

    for (let i = 0; i < N; i++) {
        arr.push(data[idx++]);
    }

    let P = data[idx];

    // Sort the array
    arr.sort((a, b) => a - b);

    for (let i = 0; i < N - 2; i++) {
        let left = i + 1;
        let right = N - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === P) {
                console.log(arr[i], arr[left], arr[right]);
                return;
            } else if (sum < P) {
                left++;
            } else {
                right--;
            }
        }
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
