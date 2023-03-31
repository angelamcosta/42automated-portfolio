require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const app = express();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

app.use(express.static('../public'));
app.use(cookieParser());

app.get('/callback', async (req, res) => {
	try {
		const response = await axios.post('https://api.intra.42.fr/oauth/token', {
			grant_type: 'client_credentials',
			client_id: clientId,
			client_secret: clientSecret
		});

		res.cookie('access_token', response.data.access_token);
		res.redirect('/')
	} catch (error) {
		console.error(error);
		res.status(500).send('An error occurred');
	}
})

app.get('/search/:intraUser', async (req, res) => {
	const intraUser = req.params.intraUser;
	const access_token = req.cookies.access_token;

	try {
		const response = await axios.get(`https://api.intra.42.fr/v2/users/${intraUser}`, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});

		res.send(response.data);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			console.log('Access token expired');
			alert('Access token expired');
			res.clearCookie('access_token');
			return res.redirect('/callback');
		}
		res.status(500).send('An error occurred');
	}
})

app.listen(3000, () => {
	console.log('server is up and running on port 3000');
})