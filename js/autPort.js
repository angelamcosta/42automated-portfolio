const AUTH_URL = 'https://api.intra.42.fr/oauth/authorize';
const TOKEN_URL = 'https://api.intra.42.fr/oauth/token';
const SCOPES = 'public profile projects tig'
var AUTH_CODE;

function login()
{
	window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`
}

function authenticateUser()
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	AUTH_CODE = urlParams.get('code');

	if (AUTH_CODE)
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
				console.log("Error: " + error + "| Status: " + status);
			}
		})
	}
}

authenticateUser();