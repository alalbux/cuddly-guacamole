/*
A função plusMinus recebe um array chamado arr como entrada.

const n = arr.length; armazena o comprimento do array em n, que será usado posteriormente para calcular as proporções.

Usamos o método map para criar três novos arrays a partir do array arr. Cada novo array contém 0s e 1s. Um valor é mapeado para 1 se a condição específica for verdadeira e 0 se for falsa. Aqui está o que cada mapeamento faz:

arr.map(num => num > 0 ? 1 : 0) mapeia os elementos maiores que 0 para 1 e os outros para 0, criando um array com 1s onde os números são positivos e 0s onde não são.
arr.map(num => num < 0 ? 1 : 0) mapeia os elementos menores que 0 para 1 e os outros para 0, criando um array com 1s onde os números são negativos e 0s onde não são.
arr.map(num => num === 0 ? 1 : 0) mapeia os elementos iguais a 0 para 1 e os outros para 0, criando um array com 1s onde os números são zero e 0s onde não são.
Usamos o método reduce para contar o número de 1s em cada um desses arrays, o que nos dá o número de elementos positivos, negativos e zeros:

positiveCount é a contagem de 1s no primeiro array, representando a quantidade de números positivos.
negativeCount é a contagem de 1s no segundo array, representando a quantidade de números negativos.
zeroCount é a contagem de 1s no terceiro array, representando a quantidade de zeros.
Calculamos as proporções dividindo o número de elementos de cada categoria pelo tamanho total do array (n):

positiveRatio é a proporção de números positivos em relação ao tamanho total do array.
negativeRatio é a proporção de números negativos em relação ao tamanho total do array.
zeroRatio é a proporção de zeros em relação ao tamanho total do array.
Usamos console.log para imprimir as proporções com precisão de 6 casas decimais, como solicitado no problema original.

*/


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