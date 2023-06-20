#! /usr/bin/env node
import { program } from 'commander';
import list from './commands/list.js'
import add from './commands/add.js';
import done from './commands/done.js';

program.command('list')
    .description('Lista todos as tarefas')
    .action(list);

program.command('add <task>')
    .description('Cria uma nova tarefa')
    .action(add);

program.command('done')
    .description('Finaliza uma tarefa')
    .option('-t, --tasks <tasks...>', 'A tarefa completada. Se não espeficiada, todas serão marcadas como completas.')
    .action(done);

program.parse();
