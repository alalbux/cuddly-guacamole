function rotateLeft(d, arr) {
    const n = arr.length;
    const rotatedArr = new Array(n);

    for (let i = 0; i < n; i++) {
        const newPosition = (i - d + n) % n;
        rotatedArr[newPosition] = arr[i];
    }

    return rotatedArr;
}