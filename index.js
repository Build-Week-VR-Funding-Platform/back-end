const server = require('./api/server.js');
require('dotenv').config()

const Port = process.env.PORT || 8888;
server.listen(Port, () => console.log(`Server is listening on port ${Port} `));