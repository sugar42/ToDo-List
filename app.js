'use strict';

const http = require('http');
const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();
const { InMemoryStore } = require('./lib/store/InMemoryStore');
const { processenv } = require('processenv');


const store = new InMemoryStore();


//import function from /getApi
const { getApi } = require('./lib/getApi');
const { floor } = require('lodash');

const api = getApi( store );
const server = http.createServer(api);

const port = processenv('PORT', 3_000);

server.listen(port, () => {
    logger.info('Server started.', { port });
});
