import Conf from 'conf';
const config = new Conf({projectName: 'todos'});
import chalk from 'chalk';

function list() {
    const todoList = config.get('todo-list')

    if (todoList.length === 0) {
        console.log(
            chalk.red.bold('Sem tarefas ainda.')
        )
    }

    console.log(
        chalk.blue.bold('Tarefas listadas em verdes já foram finalizadas. Tarefas em amarelo ainda estão em desenvolvimento.')
    )

    todoList.forEach((task, index) => {
        if (task.done) {
            console.log(
                chalk.greenBright(`${index}. ${task.text}`)
            )
        } else {
            console.log(
                chalk.yellowBright(`${index}. ${task.text}`)
            )
        }
    })
}

export default list