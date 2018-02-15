module.exports = {
  execute(command) {
    console.log(`Неизвестная команда ${command}.`);
    console.log(`Для справки наберите "--help".`);
    process.exit(1);
  }
};
