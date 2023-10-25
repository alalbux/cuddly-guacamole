let max = 0
let min = 0
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if(i === 0) {
        min = arr[i]
        max = arr[i]
        continue
    }
    if(arr[i] < min) {
        min = arr[i]
    }
    if(arr[i] > max) {
        max = arr[i]
    }
}