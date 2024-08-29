function sum(a, b) {
    return a + b;
}

const sumArrow = (a, b) => {
    return a + b;
}

const sumArrow1 = (a, b) => a + b;
 
// As linhas de cimas exercem a mesma função de criar uma função, sendo a de cima a padrão e a de baixo as Arrow Functions

const soma = sum(2, 5);
console.log(soma);

const somaArrow = sumArrow(5, 10);
console.log(somaArrow);

const somaArrow1 = sumArrow1(10, 58);
console.log(somaArrow1);