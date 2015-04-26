/**
 * Created by renerodriguez on 4/26/15.
 */
angular.module('resizable', [])
.directive('resizable', function($window) {
    return function($scope) {
        $scope.initializeWindowSize = function() {
            $scope.windowHeight = $window.innerHeight;
            return $scope.windowWidth = $window.innerWidth;
        };
        $scope.initializeWindowSize();
        return angular.element($window).bind('resize', function() {
            $scope.initializeWindowSize();
            return $scope.$apply();
        });
    };
});