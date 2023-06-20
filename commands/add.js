import Conf from 'conf';
const config = new Conf({projectName: 'todos'});
import chalk from 'chalk';

function add (task) {
    let todosList = config.get('todo-list')

    if (!todosList) {
        todosList = []
    }
    todosList.push({
        text: task,
        done: false
    })

    config.set('todo-list', todosList)

    console.log(
        chalk.green.bold('Tarefa criada com sucesso')
    )
}

export default add