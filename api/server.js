const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const router = require('../routes-helpers/routes/founders_routers.js');


const authRouter = require('../routes-helpers/auth/auth_router.js');
const projectsRouter = require('../routes-helpers/routes/projects_router.js');
const foundersRouter = require('../routes-helpers/routes/founders_routers.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


// server.use('/api/auth', authRouter);// where you url is housed
server.use('/api/projects', projectsRouter);// where you url is housed
server.use('/api/founders', foundersRouter);// where you url is housed

server.get('/', (req, res) => {
    res.json({ message: 'just being a server, I am working' });
});

module.exports = server;