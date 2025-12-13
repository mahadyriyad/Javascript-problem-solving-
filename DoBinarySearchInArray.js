function main(input) {
    let data = input.split(/\s+/).map(Number);
    let idx = 0;

    let N = data[idx++];
    let arr = [];

    for (let i = 0; i < N; i++) {
        arr.push(data[idx++]);
    }

    let P = data[idx];

    let left = 0;
    let right = N - 1;
    let foundIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === P) {
            foundIndex = mid;
            break;
        } else if (arr[mid] < P) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (foundIndex !== -1) {
        console.log(foundIndex);
    } else {
        console.log("Element not found");
    }
}

let input = "";
process.stdin.on("data", chunk => {
    input += chunk;
});

process.stdin.on("end", () => {
    main(input.trim());
});
