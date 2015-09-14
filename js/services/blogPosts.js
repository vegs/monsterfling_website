app.factory('blogPosts', ['$http', function($http) {
  return $http.get('http://monsterfling.herobo.com/php/fetchBlogPosts.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);