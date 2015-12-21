(function(){

	var app = angular.module('myInstagramApp',[]);
	app.controller('InstagramController',['$scope',function($scope){

		var company_ids = {
			
		}

		$scope.companies = ["Pressed Juicery", "Juice Press","Well and Good","Juice Generation", "Class Pass", "Oh She Glows", "Athleta", "Lululemon"];
		$scope.current_companies = "Pressed Juicery";

		$scope.followers = "Test Names Go Here"

		

	}]);

})();


$http({
		  method: 'GET', url: 'https://api.instagram.com/v1/users/230881832/followed-by?access_token=400705.e4a7751.a9862f7be60c4fafa329aa11af0001ac'
		}).then(function successCallback(response) {
		    alert(success);
		  }, function errorCallback(response) {
		   	alert(error);
		  });