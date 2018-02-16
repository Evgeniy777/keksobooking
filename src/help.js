module.exports = {
  name: `help`,
  description: `Показывает список команд`,
  execute(commands) {
    console.log(`Комманды`);
    for (let name in commands) {
      if (commands.hasOwnProperty(name)) {
        console.log(`--${commands[name].name} -`.grey, `${commands[name].description}`.green);
      }
    }
  }
};
