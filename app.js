const express = require('express');
const app = express();
const client = require('discord-rich-presence')('417686773074886666');

app.use(express.json());

app.post("/", (request, response) => {
	let body = request.body;
	let presence = {
		state: body.state.substring(0, 128),
		details: body.details.substring(0, 128),
		largeImageKey: 'chrome',
		largeImageText: 'Google Chrome',
		instance: true
	}

	client.updatePresence(presence);
	response.sendStatus(200);
});

app.listen(3000, () => console.log('Discord-Chrome-Presence is ready!'))