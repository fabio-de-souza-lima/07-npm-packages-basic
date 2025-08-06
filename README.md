# 📦 07-npm-packages-basic

<p align="center">
  <img src="https://img.shields.io/badge/NPM-Packages-blue?style=for-the-badge&logo=npm" />
  <img src="https://img.shields.io/badge/Node.js-%232F74C0?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" />
</p>

Projeto desenvolvido durante minha jornada na plataforma **DIO**, utilizando pacotes NPM para personalizar o terminal com mensagens estilizadas e visuais.

---

## 🧰 Tecnologias & Dependências

| Pacote       | Função                                                             |
|--------------|--------------------------------------------------------------------|
| `chalk`      | Estilização de texto no terminal com cores, estilos e fundo       |
| `log-symbols`| Ícones visuais como ✔️, ❌, ⚠️, ℹ️ para melhorar o feedback via terminal |

---

## ⚙️ Instalação

```bash
npm install chalk log-symbols

📂 Estrutura do Projeto
07-npm-packages-basic/
├── node_modules/
├── src/
├── package.json
├── package-lock.json
└── .gitignore

🧪 Exemplo no Código
import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgGreen.italic('Olá, eu sou'));
console.log(chalk.blue.bgGray.bold('Fabio de Souza Lima!'));

console.log(logSymbols.success, "Servidor iniciado com sucesso");
console.log(logSymbols.success, chalk.green.italic("Servidor iniciado"));

console.log(logSymbols.error, chalk.red.italic("Servidor com problema"));
console.log(logSymbols.warning, chalk.yellow("Atenção"));
console.log(logSymbols.info, chalk.blue("Informo que o sistema a partir das 0h estará inoperante."));

🧼 Ignorar diretórios no Git
Adicione o seguinte ao seu arquivo .gitignore:
node_modules/

📝 Detalhes no package.json
{
  "name": "07-npm-packages-basic",
  "version": "1.0.0",
  "author": "Fabio de Souza Lima",
  "license": "ISC",
  "type": "module",
  "main": "index.js",
  "dependencies": {
    "chalk": "^5.5.0",
    "log-symbols": "^7.0.1"
  }
}

🚀 Aprendizado na DIO
Durante esse projeto, aprendi:

✅ Gerenciar pacotes com o NPM

✅ Criar interfaces mais amigáveis via terminal com estilo visual

✅ Utilizar .gitignore para evitar sobrecarga no repositório

✅ Estruturar corretamente arquivos como package.json

✅ Documentar o projeto de forma clara e acessível no GitHub

## 🔗 Links Relevantes

- 📁 [Repositório DIO](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/07-npm-packages-basic)  
- 📦 [NPM - Página Oficial](https://www.npmjs.com/)  
- 🛠️ [Documentação NPM](https://docs.npmjs.com/)  
- 🧠 [75 Pacotes Úteis](https://firebearstudio.com/blog/node-js-command-line-apps-utilities.html)


