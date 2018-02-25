const projectInfo = require(`../package.json`);
const readline = require(`readline`);
const generate = require(`./generate`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  generate: `Вы хотите сгенерировать данные для игры? (да/нет)\n`,
  quantity: `Сколько элементов нужно создать? (число)\n`,
  path: `Укажите путь до файла, в котором сохранить данные\n`
};

rl.on(`close`, () => {
  console.log(`До встречи`);
  process.exit(0);
});

const askQuestion = (questionText) => new Promise((resolve) => rl.question(questionText, resolve));

 const readlineHandler = () => {
  console.log(`Привет, пользователь!`);
  console.log(`Эта программа будет запускать сервер "${projectInfo.name.zebra}".`);
  console.log(`Автор: ${projectInfo.author.rainbow}`);
  console.log();

  askQuestion(questions.generate)
    .then((line) => {
      line = line.trim();
      if (line === `да`) {
        return askQuestion(questions.quantity);
      }
    })
    .then((quantity) => {
      quantity = quantity.trim();
      if (!isNaN(quantity)) {
        return askQuestion(questions.path)
          .then((path) => {
            path = path.trim();
            if (path) {
              console.log(path);
              generate.execute(path, quantity);
            }
          })
      }
    })
    .then(() => {
      console.log(`Ok!`);
      rl.close();
    })
};

module.exports = {
  command: `default`,
  execute: readlineHandler
};
