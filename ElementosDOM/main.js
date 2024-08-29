// const addUserText = document.getElementById("add-user"); // Identifica onde esse texto está localizado no html

// console.log(addUserText) // <h1 id="add-user">Adicionar usuário</h1>

// addUserText.innerText = "Adicionar usuário"; // Substitui o texto "Add User" por "Adicionar usuário"

const addUserText = document.querySelector('#add-user'); // Necessário a # caso seja um ID,

console.log(addUserText) // h1#add-user

addUserText.textContent = "Adicionar usuário";

const myForm = document.querySelector('.container #my-form'); // Para se obter o formulário que tem como ID = my-form e se encontra na <section> class = 'container' 

console.log(myForm)

// Selecionar múltiplos itens

const allItems = document.querySelectorAll('.item'); // Selecionando todos da classe 'item'

console.log(allItems)

// Removendo itens
const itemsTudo = document.querySelector('.items'); // Seleciona a <ul> items
const items = document.querySelector('.items .item'); // Seleciona a primeira <li> da <ul> items

// itemsTudo.remove() // Remove a <ul> items
items.remove(); // Remove a primeira <li> da <ul> items 

allItems[1].remove(); // Remove a <li> que se encontra no indice 1

allItems[2].innerHTML = "<h1>Testando innerHTML</h1>"; // O innerHTMl permite que possa mudar diretamente o HTML, podendo incluir <h1> <p>, entre outros

const button = document.querySelector('.btn'); // Seleciona o button do 'Submit'
button.style.background = "red"; // Seta a cor do botão pra red