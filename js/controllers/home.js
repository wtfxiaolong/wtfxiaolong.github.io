define(['app'],function (app) {
    app.controller('homeCtrl', ['$scope', function($scope) {
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

        $scope.search = function() {
            location.href = "#/tab/search";
        };

        $scope.getDetail = function(id) {
            location.href = "#tab/postMsg";
        };

    }]);
});
    
