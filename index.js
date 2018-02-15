const executor = require(`./src/executor`);
const command = process.argv[2];

executor.execute(command);
