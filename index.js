const hapi = require('hapi');
const axios = require('axios');
const server = new hapi.Server();

server.connection({
	port: process.env.PORT || 5000
});

server.route({
	path: '/{path?}',
	method: 'POST',
	handler: (request, reply) => {
		axios.get('http://inspirobot.me/api?generate=true').then(({data}) => reply(data));
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Server running at: ' + server.info.uri);
	server.log('info', 'Server running at: ' + server.info.uri);
});
