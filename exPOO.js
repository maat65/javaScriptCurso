class Person {
    constructor(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // É possível também criar métodos dentro da classe
    getFullName(){
        //return `${this.firstName} ${this.lastName}`
        console.log(`${this.firstName} ${this.lastName}`)
    }
    static speak(){
        console.log("Testando speak()");
    } // Método estático, não necessita de nenhuma variável na criação para que funcione no código, ao contrario do getFullName(), que necessita do firstName e lastName
}
// constructor() = Propriedades que a classe 'Person' vai ter

const person = new Person("Marcos", "Almeida", 26);
console.log(Person); // Mostra a classe 'Person'
console.log(person); // Mostra a constantes 'person' que foi criada
//console.log(person.getFullName()) // Mostra o nome completo por conta do método getFullName que retorna a junção do firstName e lastName
person.getFullName();
// person.speak(); // Usado dessa maneira quando não é colocado o 'static' antes do método 'speak()'
Person.speak(); // Usado dessa maneira quando é colocado o 'static' antes do método 'speak()'



class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} fez um som!`)
    }
}

class Dog extends Animal {
    constructor(name){
        super(name); // Chama o constructor da classe 'Animal'
    }
    speak(){
        console.log(`${this.name} latiu!`)
    } // Esse método speak() sobreescreve o método pai, podendo ser para coisas mais específicas
} // Sabendo que o dog extende de animal, ele herda todos os métodos que a classe pai (Animal) tem

const bicho = new Animal("Fred");
bicho.speak()

const cachorro = new Dog("Paul");
cachorro.speak()