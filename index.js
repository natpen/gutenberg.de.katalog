var request  = require('request');
var cheerio  = require('cheerio');

var requestOptions = {
	url: 'http://gutenberg.spiegel.de/autor',
	headers: {
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36'
	}
};
return request(requestOptions, function(err, resp, body) {
	if (err) throw err;
	$ = cheerio.load(body);

	var authors = [];

	$('#spTeaserColumn a').each(function(i, element) {

		var fullName = $(element).text();

		if (!fullName) return;

		var fullNameSplit = fullName.split(',').map(function(namePart) {
			return namePart.trim();
		});

		var firstName = fullNameSplit.length > 1
			? fullNameSplit.slice(1).join(' ')
			: '';

		var lastName = fullNameSplit[0];

		var newAuthor = {
			firstName: firstName,
			lastName: lastName,
			url: 'http://gutenberg.spiegel.de' + $(element).attr('href')
		};
		
		authors.push(newAuthor);
	});

	return console.log(authors);
});