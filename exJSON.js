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

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

console.log(todos)
console.log(todosJSON[1]);
console.log(todosList);