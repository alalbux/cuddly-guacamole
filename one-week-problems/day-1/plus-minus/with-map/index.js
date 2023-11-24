function plusMinus(arr) {
    const n = arr.length;
    
    const positiveCount = arr.map(num => num > 0 ? 1 : 0).reduce((a, b) => a + b, 0);
    const negativeCount = arr.map(num => num < 0 ? 1 : 0).reduce((a, b) => a + b, 0);
    const zeroCount = arr.map(num => num === 0 ? 1 : 0).reduce((a, b) => a + b, 0);

    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}