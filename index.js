// const hapi = require('hapi');
const axios = require('axios');
// const server = new hapi.Server();
const http = require('http');

// server.connection({
// 	port: process.env.PORT || 5000
// });

// server.route({
// 	path: '/{path?}',
// 	method: 'POST',
// 	handler: (request, reply) => {
// 		axios.get('http://inspirobot.me/api?generate=true').then(({data}) => {
// 			const slackReply = {
// 				response_type: "in_channel",
// 				text: data
// 			};

// 			reply(slackReply);
// 		});
// 	}
// });

// server.start((err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log('Server running at: ' + server.info.uri);
// 	server.log('info', 'Server running at: ' + server.info.uri);
// });


http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	if (req.url === '/') {
		res.write(req.url);
		res.end();
	} else {
		axios.get('http://inspirobot.me/api?generate=true').then(({ data }) => {
			const slackReply = {
				response_type: "in_channel",
				text: data
			};

			res.write(slackReply);
			res.end();
		}).catch(err => {
			const slackReply = {
				text: 'http://inspirobot.me/website/images/inspirobot-dark-green.png'
			};

			console.log(err);

			res.write(slackReply);
			res.end();
		});
	}
}).listen(8080);