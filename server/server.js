require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const app = express();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));
app.engine('ejs', require('ejs').__express);
app.set('views', __dirname + '/views');
app.use(cookieParser());

app.get('/', (req, res) => {
	res.render('index');
})

app.get('/callback', async (req, res) => {
	try {
		const response = await axios.post('https://api.intra.42.fr/oauth/token', {
			grant_type: 'client_credentials',
			client_id: clientId,
			client_secret: clientSecret
		});

		res.cookie('access_token', response.data.access_token);
		res.render('index', { callback: true });
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

		const user = response.data;
		var projects = [];

		for (let i = user.projects_users.length - 1; i >= 0; i--)
		{
			if (user.projects_users[i].cursus_ids[0] == 21 && user.projects_users[i]['validated?'] && !(user.projects_users[i].project.name.includes("Exam")))
			{
				var project_res = await axios.get(`https://api.intra.42.fr/v2/projects/${user.projects_users[i].project.slug}`, {
				headers: {
					Authorization: `Bearer ${access_token}`
					}
				});
				projects.push(project_res.data);
			}
		}

		res.render('user', { user: user, projects: projects});
	} catch (error) {
		if (error.response && error.response.status === 401) {
			console.log('Access token expired');
			res.clearCookie('access_token');
			return res.redirect('/callback');
		}
		else if (error.code == 'ERR_BAD_REQUEST')
			res.render('index', { errormessage: error.code });
	}
})

app.listen(3000, () => {
	console.log('server is up and running on port 3000');
})