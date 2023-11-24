const result = arr.reduce(({min, max, sum}, num, index) => {
    if (index === 0) {
        return {min: num, max: num, sum: sum + num }
    }
    if (num < min) {
        return {min: num, max, sum: sum + num }
    }
    
    if (num > max) {
        return {max: num, min, sum: sum + num }
    }
}, {min: 0, max: 0, sum: 0 })

console.log(result.sum - result.max, result.sum - result.min)
