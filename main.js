function getVideos(searchTerm) {

	var query = {
        part: 'snippet',
        key: 'AIzaSyDAvwOYK3o237TdYccJiLWPAF5n0Vpg_vI',
        maxResults: 6,
        type: 'video',
        q: searchTerm
    }
    console.log(query);
    $.getJSON('https://www.googleapis.com/youtube/v3/search', query, diplayData)
};

$('.js-search-form').submit(event => {
	event.preventDefault();
	console.log($('input').val());
	getVideos($('input').val());
});
function diplayData(data) {
	let ourHTML = ''
	console.log(data);
	
	console.log(data.items);
	data.items.forEach(function(e){
		console.log(e);
		ourHTML += `<div>${ e.snippet.title }
						  <iframe src="https://www.youtube.com/embed/${e.id.videoId}" frameborder="0" allowfullscreen></iframe>


					 </div>`
	})
	console.log(ourHTML);
	$('.js-search-results').html(ourHTML)
}

// <iframe src="https://www.youtube.com/embed/4JoMgxXwwJ8" frameborder="0" allowfullscreen></iframe>