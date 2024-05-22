import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {


    let addTask = await inquirer.prompt(
        [
            {
                name: "addtodo",
                type: "input",
                message: "What you want to add in your todos?",
            },


            {
                name: "addmoretodos",
                type: "confirm",
                message: "Do you want to add more todos?",
                default: "false"

            }
        ]
    );

    todos.push(addTask.addtodo);
    condition = addTask.addmoretodos
    console.log(todos);


}
