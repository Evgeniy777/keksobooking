const {generateEntity} = require(`./generate-entity`);
const fs = require(`fs`);

const fileWriteOptions = {encoding: `utf-8`, mode: 0o644};
let index = 0;

module.exports = {
  name: `generate`,
  description: `генерирует данные приложения`,
  execute(path = process.cwd(), quantity = 2, cb) {
    while (index < quantity) {
      console.log(path);
      fs.writeFile(`${path}/app-data${index === 0 ? `` : `-${index}`}.json`, JSON.stringify(generateEntity()), fileWriteOptions, cb);
      index++;
    }
  }
};
