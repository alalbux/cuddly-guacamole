
function findMedian(arr) {
    // Primeiro, classifique o array em ordem crescente
    arr.sort((a, b) => a - b);

    const n = arr.length;

    // Verifica se o número de elementos no array é ímpar
    if (n % 2 !== 0) {
        const middleIndex = Math.floor(n / 2);
        return arr[middleIndex];
    } else {
        // Se for par, calcule a média dos dois elementos do meio
        const middleIndex1 = n / 2 - 1;
        const middleIndex2 = n / 2;
        const median = (arr[middleIndex1] + arr[middleIndex2]) / 2;
        return median;
    }

}