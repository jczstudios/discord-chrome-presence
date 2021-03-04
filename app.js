const express = require('express');
const RPC = require("discord-rpc");

const client = new RPC.Client({ transport: 'ipc' });
client.login({ clientId: '417686773074886666' });

client.once('ready', ()=>{
	const app = express();
	app.use(express.json());
	app.post("/", (request, response) => {
		let body = request.body;
		if (body.action == "set") {
      console.log(`${body.state.substring(0, 128)} - ${body.details.substring(0, 128)}`);
			let presence = {
				state: body.state.substring(0, 128),
				details: body.details.substring(0, 128),
				largeImageKey: 'chrome',
        largeImageText: 'Google Chrome',
        startTimestamp: Date.now(),
				instance: true
			};
			client.setActivity(presence);
		} else if (body.action == "clear") {
      console.log('Idling');
			let presence = {
				state: "Idling",
				details: "Idling",
				largeImageKey: 'chrome',
        largeImageText: 'Google Chrome',
				instance: true
			};
			client.setActivity(presence);
		}
		response.sendStatus(200);
	});
  client.clearActivity();
	app.listen(3000, () => console.log('Discord-Chrome-Presence is ready!'));
});
