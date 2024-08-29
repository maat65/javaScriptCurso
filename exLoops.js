const cars = ["Ferrari", "Mustang", "Mercedes"];
const barra = "======================================"

for(let loop1 = 0; loop1 < cars.length; loop1++) {
    console.log(cars[loop1]);
}

console.log(barra);

for(let car of cars) {
    console.log(car);
}

console.log(barra);
const carros = function(car, index){
    console.log(index);
    console.log(car);
} // A função forEach pode ter como parâmetro o index, que é a posição de onde a varredura se encontra
cars.forEach(carros);

const person = {
    name: "Pedro",
    age: 21,
}

console.log(barra);

for(property in person){ // for in
    console.log(property); // Vai acessar o name e age
    console.log(person[property]); // Vai acessar o "Pedro" e '21'
}