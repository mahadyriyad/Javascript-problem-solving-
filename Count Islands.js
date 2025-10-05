function main() {
    const N = 5, M = 8;
    const grid = [
        "########",
        "#..#...#",
        "####.#.#",
        "#..#...#",
        "########"
    ].map(line => line.split(''));

    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= N || y >= M) return;
        if (visited[x][y] || grid[x][y] === '#') return;
        visited[x][y] = true;
        for (const [dx, dy] of directions) dfs(x + dx, y + dy);
    }

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && grid[i][j] === '.') {
                dfs(i, j);
                count++;
            }
        }
    }

    console.log(count);
}

main();
