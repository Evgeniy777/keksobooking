module.exports = {
  name: `help`,
  description: `Показывает список команд`,
  execute(commands) {
    console.log(`Комманды`);
    for (let name in commands) {
      console.log(`--${commands[name].name}: ${commands[name].description}`);
    }
  }
};
