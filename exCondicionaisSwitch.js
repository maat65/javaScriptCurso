const sum = 1 + 1;

let number = sum === 2 ? "Ola" : "Oi"; // Isto é, caso o sum === 2 seja true, o valor de number será 2, e caso seja false, o valor de number será 4

console.log(number);

switch(sum){
    case 2:
        console.log("A soma é 2!");
        break;
    case 3:
        console.log("A soma é 3!");
        break;
    case 4:
        console.log("A soma é 4!");
        break;
}
