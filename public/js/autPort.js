let CLIENT_ID;
let CLIENT_SECRET;
let REDIRECT_URI;

function login() {
	const SCOPES = 'public profile projects tig';
	const AUTH_URL = 'https://api.intra.42.fr/oauth/authorize';

	window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`
}

async function getCredentials()
{
	try
	{
		const response = await fetch('/credentials');
        const credentials = await response.text();
		const parsedCredentials = JSON.parse(credentials.trim());
        CLIENT_ID = parsedCredentials.clientId;
        CLIENT_SECRET = parsedCredentials.clientSecret;
        REDIRECT_URI = parsedCredentials.redirectUri;
		console.log("success!");
	} catch (error) {
		console.log("ERROR: " + error);
	}
}

getCredentials();