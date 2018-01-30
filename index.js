const http = require('http');
const axios = require('axios');

const port = process.env.PORT || 5000;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	axios.get('http://inspirobot.me/api?generate=true').then(({ data }) => {
		const slackReply = {
			response_type: "in_channel",
			text: data
		};

		res.write(JSON.stringify(slackReply));
		res.end();
	}).catch(err => {
		const slackReply = {
			text: 'http://inspirobot.me/website/images/inspirobot-dark-green.png'
		};

		console.log(err);

		res.write(JSON.stringify(slackReply));
		res.end();
	});
}).listen(port);