const projectInfo = require(`../package.json`);

module.exports = {
  command: `default`,
  execute() {
    console.log(`Привет, пользователь!`);
    console.log(`Эта программа будет запускать сервер "${projectInfo.name.zebra}".`);
    console.log(`Автор: ${projectInfo.author.rainbow}`);
  }
};
