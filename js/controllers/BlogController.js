app.controller('BlogController', ['$scope', '$http', 'blogPosts', function($scope, $http, blogPosts) {
	blogPosts.success(function(data) {
	    $scope.blogPosts = data;

	    //FOR EACH BLOG POST WE WANT TO GET THE AUTHOR AND THE COMMENTS FOR THAT POST
	    angular.forEach($scope.blogPosts, function(value, key){

			//GET AUTHOR BASED ON ID
			$http.get('http://monsterfling.herobo.com/php/getUser.php',  { params: { id: value.authorId } } )
				.success(function(data) {
					console.log("defined: "+data.username);
					if(value.authorId==data.id){
						value.author = data;
						console.log("defined: "+value.author.username);
					}
				})
				.error(function(data) {
					console.log("error");
					return data;
				});

			//GET COMMENTS
			$http.get('http://monsterfling.herobo.com/php/fetchComments.php',  { params: { postId: value.id } } )
				.success(function(data) {
					if(value.id==data[0].blogPostId){
						value.comments = data;
						console.log("defined: "+value.id);

						//GET THE AUTHOR FOR EACH COMMENT
						angular.forEach(value.comments, function(comment, ckey){
							$http.get('http://monsterfling.herobo.com/php/getUser.php',  { params: { id: comment.authorId } } )
								.success(function(data) {
									console.log("defined: "+data.username);
									if(comment.authorId==data.id){
										comment.author = data;
										console.log("defined: "+comment.author.username);
									}
								})
								.error(function(data) {
									console.log("error");
									return data;
								});
						});
					}
				})
				.error(function(data) {
					console.log("error");
					return data;
				});
		});
	});
}]);