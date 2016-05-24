angular.module('app', [])

angular.module('app')
.controller('GalleryController', function($scope, $http){
	$scope.getUsersPhotos = function(username){
		$http.get('https://api.unsplash.com/users/' + username + '/photos?client_id=f50ace2791a12614b36e39ef6c55df70cef412107fabb8c9bb6d43402dff2c82&order_by=popular')
		.then(function(res){
			console.log(res)
			$scope.data = res.data;
			$scope.photos = _.map($scope.data, 'urls.regular')
		})
	}

	$scope.getUsersPhotos('lukasbudimaier');	


})
