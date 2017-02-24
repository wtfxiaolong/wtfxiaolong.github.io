define(['app'],function (app) {
    app.controller('activitymsgCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
        $scope.goBack = function() {
            location.href = "#tab/home";
        };

    }]);
   
});