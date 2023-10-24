function hourglassSum(arr) {
    // Inicializa a variável maxSum com o menor valor possível
    let maxSum = -Infinity;

    // Loop para percorrer as "hourglasses" na matriz
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            // Calcula a soma da "hourglass" atual
            const sum = 
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            // Atualiza maxSum se a soma atual for maior
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}