const intro = require(`./intro`);
const help = require(`./help`);
const version = require(`./version`);
const error = require(`./error`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);
const generate = require(`./generate`);

const COMMANDS = {
  [help.name]: help,
  [version.name]: version,
  [author.name]: author,
  [license.name]: license,
  [description.name]: description,
  [generate.name]: generate
};

module.exports = {
  execute(command) {
    if (!command) {
      intro.execute();
      return;
    }

    const name = command.substr(2);
    const userCommand = COMMANDS[name];

    if (!userCommand) {
      error.execute(command);
      return;
    }

    if (name === help.name) {
      help.execute(COMMANDS);
    } else {
      userCommand.execute();
    }
  }
};
