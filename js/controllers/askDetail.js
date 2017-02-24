define(['app'],function (app) {
    app.controller('askDetailCtrl', ['$scope','$ionicPopup', '$state', function($scope, $ionicPopup, $state) {
    	
		var id = $state.params.id;
		if (id == "finish") {
			$scope.type = "radio";
		} else {
	    	$scope.type = "checkbox";
		};

    	$scope.next = function(){
    		if (id == "finish") {
    			location.href = "#tab/chats";
    		} else {
	    		location.href = "#tab/askDetail/"+"finish";
    		}
    	}


    }]);
   
});