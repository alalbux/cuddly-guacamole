function miniMaxSum(arr) {
    const minSum = arr.reduce((acc, num) => acc + num, 0) - Math.max(...arr);
    const maxSum = arr.reduce((acc, num) => acc + num, 0) - Math.min(...arr);
    console.log(minSum, maxSum);
}