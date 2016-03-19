(function(){
	var app = angular.module('myInstagramApp',[]);
	app.controller('InstagramController',['$scope',function($scope){
		$scope.followers = null;


		//access users who follow companies via Jake's token	
		var object = {"Pressed Juicery":12510488, "Juice Press":230881832,"Well and Good":2466792,"Juice Generation":217309140, "Class Pass":830096458, "Oh She Glows":44115468, "Athleta":183890290, "Lululemon":2134762};

		//List company names to Access in DOM	
			$scope.company_name = Object.keys(object)
			$scope.current_company = "Pressed Juicery";
		//List follower names to Access in DOM		
			$scope.followers = "Test Names Go Here"

		//access user company selection
		$scope.changedValue=function(item){
		//change id based on user company selection	
	    	var url = "https://api.instagram.com/v1/users/"+(object[item])+"/followed-by?access_token=400705.e4a7751.a9862f7be60c4fafa329aa11af0001ac&callback=?"


	    	jQuery.getJSON( url, function(data){
		        $scope.$apply(
		            function() {
				    	$scope.followers = data['data'];
				    	console.log('FOLLOWERS: '+JSON.stringify($scope.followers));
		            }
		        );	    		



	    	})
    	}    
    	

	}]);

})();