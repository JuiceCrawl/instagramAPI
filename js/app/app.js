(function(){

	var app = angular.module('myInstagramApp',[]);
	app.controller('InstagramController',['$scope',function($scope){

	var follower_data
	
		$scope.company_name = ["Pressed Juicery", "Juice Press","Well and Good","Juice Generation", "Class Pass", "Oh She Glows", "Athleta", "Lululemon"];
		$scope.current_company = "Pressed Juicery";

		$scope.followers = "Test Names Go Here"

		

	}]);

})();