const displayQuotes = quotes => {
	document.getElementById('quote').innerText = `"${quotes.quote}"`;
};

fetch('https://api.kanye.rest')
	.then(res => res.json())
	.then(data => displayQuotes(data));
