// Map, Filter e Reduce
// Map
const numbers = [1, 2, 3, 4, 5]

console.log(numbers)

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
}) // 

console.log(numbersMultipliedByTwo)

// Filter
const letras = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef']

console.log(letras)

const letrasFilter = letras.filter(function(letras) {
    return letras.length > 3;
})

console.log(letrasFilter)

// Filter 2
const idades = [9, 12, 92, 13, 4, 14]

console.log(idades)

const idadesPar = idades.filter(function(idade){
    return idade % 2 == 0;
})

console.log(idadesPar)

// Reduce
const somaIdades = idades.reduce(function(idade, acumulador) {
    return acumulador + idade;
}, 0)

console.log(somaIdades) // 144