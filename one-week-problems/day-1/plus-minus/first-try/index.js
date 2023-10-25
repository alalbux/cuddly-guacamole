function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    const positiveRatio = positive / n;
    const negativeRatio = negative / n;
    const zeroRatio = zero / n;

    const decimals = 6;

    // Imprimir proporção de números positivos
    console.log(positiveRatio.toFixed(decimals));
    
    // Imprimir proporção de números negativos
    console.log(negativeRatio.toFixed(decimals));
    
    // Imprimir proporção de zeros
    console.log(zeroRatio.toFixed(decimals));
}
