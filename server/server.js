require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello easter hackaton =^.^=');
})

app.get('/credentials', (req, res) => {
	const clientId = process.env.CLIENT_ID;
	const clientSecret = process.env.CLIENT_SECRET;
	const redirectUri = process.env.REDIRECT_URI;

	res.json({clientId, clientSecret, redirectUri})
})

app.listen(3000, () => {
	console.log('server is up and running on port 3000');
})