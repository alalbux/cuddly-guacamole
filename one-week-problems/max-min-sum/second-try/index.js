function miniMaxSum(arr) {
    arr.sort()
    const max = arr.reduce((prev, curr, index) => index == 0 ? prev : prev + curr, 0)
    const min = arr.reduce((prev, curr, index, arr) => index == arr.length - 1 ? prev : prev + curr, 0)
    console.log(`${min} ${max}`)
}