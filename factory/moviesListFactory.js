var key = '5ff73eef6bd74a64f1ad9b5f606b2854';
var key1 = '450b1b80';
myApp.factory('movieData', function($http) {
    return {
        upcoming_movies: function () {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + key +'&language=en-US&page=1'}).then(function (response) {
                //console.log(response.data);
                return response.data;
            });
        },
		search_movies: function (movieName) {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie?api_key='+key + '&language=en-US&query='+ movieName+ '&page=1&include_adult=false'}).then(function (response) {
                //console.log(response.data,movieName);
                return response.data;
            });
        },
		movies_details: function (id) {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key=' + key +'&language=en-US'}).then(function (response) {
                return response.data;
            });
        },
		costar_Details: function (id,movName) {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=' + key +'&language=en-US'}).then(function (response) {
                return response.data;
            });
        },
		top_rated: function (pageNum) {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + key +'&language=en-US&page='+pageNum}).then(function (response) {
                return response.data;
            });
			
        },
		popular_movies: function () {
            return  $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular?api_key=' + key +'&language=en-US&page=1'}).then(function (response) {
                return response.data;
            });
        }
	}
});
