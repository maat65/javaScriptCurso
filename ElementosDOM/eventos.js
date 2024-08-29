const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previne que ele recarregue a pagina ao apertar o botao
    console.log("Clicou!");
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    if(nameValue === "" || emailValue === ""){
        return alert("Preencha o formulário")
    }
    myForm.style.background = "red"
    items.firstElementChild.textContent = "TESTE 1";
    items.children[1].textContent = "TESTE 2";
    items.lastElementChild.textContent = "TESTE 3"

    items.firstElementChild.style.background = "blue";
    items.children[1].style.background = "green";
    items.lastElementChild.style.background = "yellow";
})