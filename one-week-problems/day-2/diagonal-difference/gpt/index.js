function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length; // Assuming the matrix is square

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - i - 1];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

}