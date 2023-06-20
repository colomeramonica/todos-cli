import Conf from 'conf';
const config = new Conf({projectName: 'todos'});
import chalk from 'chalk';

function done({tasks}) {
    let todosList = config.get('todo-list')

    if (todosList) {
        todosList = todosList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    task.done = true
                }
            } else {
                task.done = true
            }
            return task
        });

        config.set('todo-list', todosList)
    }

    console.log(
        chalk.green.bold('Tarefas completas com sucesso')
    )
}
export default done