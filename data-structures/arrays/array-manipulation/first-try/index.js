function arrayManipulation(n, queries) {
    const arr = new Array(n).fill(0);

    for (const query of queries) {
        const a = query[0] - 1; 
        const b = query[1] - 1;
        const k = query[2];

        arr[a] += k;

        if (b < n - 1) {
            arr[b + 1] -= k;
        }
    }

    let max = 0;
    let sum = 0;

    for (const val of arr) {
        sum += val;
        max = Math.max(max, sum);
    }

    return max;
}