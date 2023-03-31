const AUTH_URL = 'https://api.intra.42.fr/oauth/authorize';
const TOKEN_URL = 'https://api.intra.42.fr/oauth/token';
const SCOPES = 'public profile projects tig';
let CLIENT_ID;
let CLIENT_SECRET;
let REDIRECT_URI;
let AUTH_CODE;

function login() {
	window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`
}

function authenticateUser() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	AUTH_CODE = urlParams.get('code');

	if (AUTH_CODE) {
		$.ajax({
			url: TOKEN_URL,
			type: "POST",
			data: {
				grant_type: "authorization_code",
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				code: AUTH_CODE,
				redirect_uri: REDIRECT_URI,
			},
			success: function (data) {
				localStorage.setItem("access_token", data.access_token);
				console.log("Authorization successful!");
			},
			error: function (xhr, status, error) {
				console.log("Authorization failed: " + error);
			},
		});
	}
}

function getCredentials()
{
	$.ajax({
		url: "localhost:3000/credentials",
		type: "GET",
		succes: function (response) {
			CLIENT_ID = response.clientId;
			CLIENT_SECRET = response.clientSecret;
			REDIRECT_URI = response.redirectUri;

			console.log("success!");
		},
		error: function (xhr, status, err) {
			console.log("ERROR: " + err);
		}
	});
}

getCredentials();
authenticateUser();