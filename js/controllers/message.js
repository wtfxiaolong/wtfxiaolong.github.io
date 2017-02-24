define(['app'],function (app) {
    app.controller('messageCtrl', ['$scope', function($scope) {
        var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
        $scope.$on('$ionicView.afterEnter', function() {
            if (pages.indexOf(location.hash) > -1) {
                var tabs =document.getElementsByTagName('ion-tabs');
                angular.element(tabs).removeClass("tabs-item-hide");
            }
        });
        $scope.$on('$ionicView.beforeLeave', function() {
            if (pages.indexOf(location.hash) > -1) return;
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).addClass("tabs-item-hide");
        });

        $scope.dataArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        $scope.remove = function(index) {
            $scope.dataArr.splice(index, 1);
        };

        $scope.askDetail = function(index) {
            location.href = "#tab/askDetail/"+index;
        };

    }]);
});
    
