/*
O método reduce é usado para reduzir uma matriz em um único valor. Ele recebe uma função de retorno de chamada e um valor inicial como argumentos. Neste caso, queremos encontrar a soma dos elementos em uma matriz, então fornecemos um valor inicial de 0 para começar a soma a partir de zero.

- O método reduce itera pelos elementos da matriz um por um, da esquerda para a direita.
- Para cada elemento na matriz, ele chama a função de retorno de chamada fornecida. A função de retorno de chamada recebe dois argumentos: um acumulador (acc) e o elemento atual (current).
- Na função de retorno de chamada, adicionamos o elemento atual (current) ao acumulador (acc). Inicialmente, o acumulador é definido como o valor inicial, que é 0.
- O resultado da função de retorno de chamada se torna o novo acumulador para a próxima iteração.
- acc começa em 0.
- Para cada elemento current na matriz ar, adicionamos a ele o valor de acc.
- Após iterar por todos os elementos, acc conterá a soma de todos os elementos na matriz.

*/

function simpleArraySum(ar) {
    return ar.reduce((acc, current) => acc + current, 0);
}