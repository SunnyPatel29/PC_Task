var pcApp = angular.module('pcApp', []);

    pcApp.controller('pcCtrl', function ($scope, $http){
        
    	var jsonData = {};
    	var names = [];
        
        $http.get('products.json').success(function(data) {
          jsonData = data;
        });

        $scope.getData = function(){
           $scope.products = jsonData.products;
         };

    	   $scope.getName = function(response){

    		/*$scope.data = jsonData.products;
    		var len = $scope.data.length;
    		for(var i = 0; i < len; i++){
    			names.push($scope.data[i].name);
    		}
    		console.log(names);*/
    	 };

     });


