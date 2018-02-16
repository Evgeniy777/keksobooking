const executor = require(`./src/executor`);
require(`colors`);

const command = process.argv[2];

executor.execute(command);
