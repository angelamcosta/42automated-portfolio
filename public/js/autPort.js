const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

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