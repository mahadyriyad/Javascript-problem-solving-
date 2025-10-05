function main() {
    const N = 6;
    const arr = [12, 3, 4, 1, 6, 9];
    const P = 24;

    arr.sort((a, b) => a - b);
    let found = false;

    for (let i = 0; i < N - 2; i++) {
        let left = i + 1;
        let right = N - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === P) {
                console.log(arr[i], arr[left], arr[right]);
                found = true;
                return;
            } else if (sum < P) left++;
            else right--;
        }
    }

    if (!found) console.log("No triplet found");
}

main();
