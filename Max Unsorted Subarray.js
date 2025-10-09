function main(input) {
    const lines = input.split('\n');
    const M = lines[1].trim().split(/\s+/).map(Number);
    const N = M.length;
    if (N < 2 || M.some(isNaN)) {
        console.log("-1");
        return;
    }

    let S = -1;
    let E = -1;

    for (let i = 0; i < N - 1; i++) {
        if (M[i] > M[i+1]) {
            S = i;
            break;
        }
    }

    if (S === -1) {
        console.log("-1");
        return;
    }

    for (let i = N - 1; i > 0; i--) {
        if (M[i] < M[i-1]) {
            E = i;
            break;
        }
    }

    let subMin = M[S];
    let subMax = M[S];
    for (let i = S + 1; i <= E; i++) {
        if (M[i] < subMin) subMin = M[i];
        if (M[i] > subMax) subMax = M[i];
    }

    while (S > 0 && M[S - 1] > subMin) S--;
    while (E < N - 1 && M[E + 1] < subMax) E++;

    console.log(`${S + 1} ${E + 1}`);
}

let input = "";
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => main(input.trim()));
