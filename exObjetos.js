const person = {
    firstName: "João",
    lastName: "Pedro",
    age: 21, 
    hobbies: ["Estudar", "Trabalhar", "Comer"]
}

// const nome = person.firstName
// const sobrenome = person.lastName
// const age = person.age
// const hobbies = person.hobbies

// Mesma coisa que acima
const {firstName: primeiroNome, lastName, age, hobbies} = person;

// console.log(firstName) // Deixa de funcionar já que o firstName foi renomeado para primeiroNome
console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(hobbies[1])

person.dog = "Rex"; // Adiciona uma nova propriedade chamada dog no person

console.log(person)



// Outro desafio
const todos = [
    {
        id: 1,
        description: "Estudar",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Comer",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    }
]

const descriptionID2 = todos[2].description;

console.log(descriptionID2)