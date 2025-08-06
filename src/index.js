// Bibliotecas NPM . https://www.npmjs.com/package/log-symbols
//Neste caso estou usando 2 pacotes que tambem é chamado de bibliotecas 

import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgGreen.italic('Olá, eu sou'));
console.log(chalk.blue.bgGray.bold('Fabio de Souza Lima!'));

//mensagem de sucesso
console.log(logSymbols.success, "Servidor iniciado com sucesso");
console.log(logSymbols.success, chalk.green.italic("Servidor iniciado "));

//mensagem de erro 
console.log(logSymbols.error, chalk.red.italic("servidor com problema "));

//mensagem de warning
console.log(logSymbols.warning, chalk.yellow("Atenção"));

//mensagem info
console.log(logSymbols.info, chalk.blue(" Informo que o sistema apartir das 0h estará inoperante."));