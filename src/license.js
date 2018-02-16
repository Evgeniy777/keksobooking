const projectInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Показывает лицензию программы.`,
  execute() {
    console.log(`${projectInfo.license}`.blue);
  }
};
