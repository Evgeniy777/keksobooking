const args = process.argv.slice(2);

switch(args[0]) {
  case `--version`:
        console.log(`v0.0.1`);
        break;
  case `--help`:
        console.log(`Комманды:
        --version - версия приложения;
        --help    - информаци о приложении;`);
        break;
  default:
        console.log(`Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Cannibal.`);
        console.error(`Чтобы прочитать правила использования приложения, наберите "--help"`);
}
