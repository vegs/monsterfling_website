app.factory('blogPostComments', ['$http', function($http) {
  return $http.get('http://monsterfling.herobo.com/php/fetchComments.php')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);