const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const errorMsg = document.querySelector('.msg');
const items = document.querySelector('.items');



submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    if(nameValue === '' || emailValue === ''){
        errorMsg.textContent = "Preencha o formulário"
        errorMsg.classList = "error";

        setTimeout(() => {
            errorMsg.textContent = "";
            errorMsg.classList = "";
        }, 2000);
        return;

    }
    // console.log("teste");
    const li = document.createElement("li");
    console.log(li);
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
})