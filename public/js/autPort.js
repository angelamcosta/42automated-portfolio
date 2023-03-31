async function getCookies()
{
	if (!document.cookie.includes('access_token'))
		window.location.href = '/callback';
	console.log("success!");
}

function getIntraId(event)
{
	event.preventDefault();
	const intraUser = $('#intra-user').val();
	window.location.href = '/search/' + intraUser;
}

getCookies();