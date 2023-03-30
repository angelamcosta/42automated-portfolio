let AUTH_CODE;
const AUTH_URL = 'https://api.intra.42.fr/oauth/authorize';
const TOKEN_URL = 'https://api.intra.42.fr/oauth/token';
const SCOPES = 'public profile projects tig'
var CLIENT_ID = "${{ secrets.CLIENT_ID }}";
var CLIENT_SECRET = "${{ secrets.CLIENT_SECRET }}";
var REDIRECT_URI = "${{ secrets.REDIRECT_URI }}";

function login()
{
	window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`
}

function authenticateUser()
{
	const currUrl = window.location.href;
	const urlParams = new URLSearchParams(new URL(currUrl).search);
	AUTH_CODE = urlParams.get('code') ?? '0';
	if (AUTH_CODE != '0')
	{
		$.ajax({
			type: "POST",
			url: "https://api.intra.42.fr/oauth/token",
			data: {
				"grant_type": "authorization_code",
				"client_id": CLIENT_ID,
				"client_secret": CLIENT_SECRET,
				"code": AUTH_CODE,
				"redirect_uri": REDIRECT_URI
			},
			success: function(response) {
				localStorage.setItem('access_token', response.access_token);
			},
			error: function(xhr, status, error) {
				console.log("Error: " + error);
			}
		});
	}
	else console.log("No code.");
}

authenticateUser();
