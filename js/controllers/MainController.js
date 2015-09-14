app.controller('MainController', ['$scope', function($scope) { 
  $scope.logo = 'img/Logo.png'
  $scope.banner = 'img/banner2.png'
  $scope.mainBackground = 'img/repeat.png'
  $scope.introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh libero, ultricies eu justo ac, tristique fermentum enim. Ut bibendum porta justo, vel blandit erat bibendum nec. Cras sit amet leo dapibus, tincidunt tortor a, scelerisque nulla. Aenean tristique mi sit amet eros accumsan posuere. Nullam ac nisi semper elit feugiat aliquam. Aenean imperdiet augue tortor, quis tincidunt augue scelerisque a. Mauris eleifend vulputate elit. Cras rutrum mi enim, id auctor lacus ullamcorper tincidunt. Proin semper sem nec purus porttitor, sit amet faucibus sapien iaculis. Donec mattis accumsan velit, quis sollicitudin tellus.";
  $scope.mailPromoText = "Register your e-mail for updates!"
  $scope.menu = [  
    {
      name: "home",
      displayText: "",
      link: "#",
      buttonImage: $scope.logo
    },  
    {
      name: "blog",
      displayText: "Blog",
      link: "#",
      buttonImage: ""
    },
    {
      name: "signIn",
      displayText: "Sign In",
      link: "#",
      buttonImage: ""
    },
    {
      name: "register",
      displayText: "Register",
      link: "#",
      buttonImage: ""
    }
  ]
	$scope.products = [
    {    
      name: 'The Book of Trees', 
   		price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: '' ,
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: '',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'The lord of the rings', 
    	price: 20, 
    	pubdate: new Date('2003', '08', '01'), 
    	cover: '',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Yer a wizurd harry', 
    	price: 15, 
    	pubdate: new Date('2032', '08', '01'), 
    	cover: '',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index){
    $scope.products[index].likes += 1
  };
  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1
  };
}]);