const x = '';
// String vazia = FALSE

const y = 0;
console.log(!!y); // Comando usado para verificar se a variável 'y' é true or false
// 0 = FALSE

const z = "teste";
console.log(!!z); // TRUE
// String não vazia = TRUE

const a = null;
// null = FALSE

const b = undefined;
// underfined = FALSE

const object = {};
const list = [];
console.log(!!object) // TRUE
console.log(!!list) // TRUE
// Uma lista e um objeto VAZIO é TRUE

// Caso queira verificar se a lista está vazia, é necessario usar o length
if (list){
    console.log(list)
} // Irá retornar a lista vazia

if (list.length > 0){
    console.log(list)
} // Não irá retornar nada pois o 'list.length > 0' deu false, portanto nao entrou no loop

console.log(!false) // Retorna TRUE
console.log(!true) // Retorna FALSE
// O uso de apenas um '!' resultará no resultado inverso