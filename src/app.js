// Escribe una función en JavaScript que reciba un arreglo de números y 
//devuelva un nuevo arreglo con los números ordenados de mayor a menor.

const ordenarNumeros = (array) =>  {
    return array.sort((a, b) => b - a);
}

console.log('Prueba practica 1');
console.log('Ordenar números de mayor a menor');
console.log('Autor: Esteban Gutierrez');
// lista de 10 números desordenados
const numeros = [1, 5, 3, 2, 8, 7, 6, 4, 10, 9];

console.log(ordenarNumeros(numeros));
