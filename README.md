📦 Projeto: 07-npm-packages-basic
Este projeto tem como objetivo demonstrar como utilizar bibliotecas NPM para melhorar a apresentação e o feedback visual de sistemas via terminal em Node.js.. Foram exploradas duas bibliotecas principais:

chalk: estilização de texto no terminal (cores, negrito, itálico etc.)

log-symbols: ícones visuais para mensagens (✔️, ❌, ⚠️, ℹ️)

📁 Estrutura do Projeto
07-npm-packages-basic/
│
├── node_modules/
├── src/
├── package.json
├── package-lock.json
└── .gitignore
🛠️ Instalação dos Pacotes
Execute o seguinte comando no terminal para instalar as dependências do projeto:

bash
npm install chalk log-symbols
📌 Código de Exemplo
js
import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgGreen.italic('Olá, eu sou'));
console.log(chalk.blue.bgGray.bold('Fabio de Souza Lima!'));

console.log(logSymbols.success, "Servidor iniciado com sucesso");
console.log(logSymbols.success, chalk.green.italic("Servidor iniciado"));

console.log(logSymbols.error, chalk.red.italic("Servidor com problema"));
console.log(logSymbols.warning, chalk.yellow("Atenção"));
console.log(logSymbols.info, chalk.blue("Informo que o sistema a partir das 0h estará inoperante."));
📄 Arquivo .gitignore
Evite subir a pasta node_modules/ para o GitHub adicionando este conteúdo ao seu .gitignore:

node_modules/
📦 package.json (informações do projeto)
json
{
  "name": "07-npm-packages-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Fabio de Souza Lima",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "chalk": "^5.5.0",
    "log-symbols": "^7.0.1"
  }
}

👨‍🏫 Aprendizado na DIO
Durante o projeto, eu aprendi:

Gerenciamento de dependências com NPM

Estilização de mensagens no terminal com chalk

Ícones visuais com log-symbols

Uso de .gitignore para evitar peso no repositório

Estrutura básica do package.json

A importância da documentação no GitHub para explicar seu projeto
