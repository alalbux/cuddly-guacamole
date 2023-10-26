function birthdayCakeCandles(candles) {
    let maxHeight = 0
    let count = 0
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];
        }
    }
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            count++;
        }
    }
    
    return count;
}