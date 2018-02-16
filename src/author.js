const projectInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Показывает автора программы.`,
  execute() {
    console.log(`${projectInfo.author}`);
  }
};
