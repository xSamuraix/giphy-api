// Example queryURL for Giphy API
var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+puppy&api_key=dc6zaTOxFJmzC";
// var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){
	console.log(response);
});