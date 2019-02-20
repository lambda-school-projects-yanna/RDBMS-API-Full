const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('API running!')
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n *** server running on port ${port}`));

