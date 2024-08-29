const names = ["Pedro", "João", 10, false]

const joao = names[2]

console.log(joao)

names.push("Fernando") // Insere no final da lista 'names'
console.log(names)

names.unshift("Henrique") // Insere no começo da lista 'names'
console.log(names)

names.push("Paulo")
names.unshift("Vitor") // Insere no começo da lista 'names'

//names.shift() // Remove o primeiro item da lista 'names'
console.log(names)

//names.pop() // Remove o ultimo item da lista 'names'
console.log(names)

names[1] = "Mateus"
console.log(names)

console.log(names.indexOf("Mateus"))

console.log(names.sort()) // Ordena os itens da lista 'names' em ordem alfabética

console.log(names.length)

const namesIsArray = Array.isArray(names)

console.log(namesIsArray)