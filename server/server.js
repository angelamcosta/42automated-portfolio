require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

app.use(express.static('../public'));

app.get('/credentials', (req, res) => {
	res.json({ 'clientId': clientId, 'clientSecret': clientSecret, 'redirectUri': redirectUri })
})

app.listen(3000, () => {
	console.log('server is up and running on port 3000');
})