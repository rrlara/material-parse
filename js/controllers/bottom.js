/**
 * Created by renerodriguez on 4/22/15.
 */

var app = angular.module('leapspot');

app.controller('ListBottomSheetCtrl', ['$scope', '$window', '$rootScope', function($scope, $window, $rootScope){


    console.log("$rootScope.clickedItem", $rootScope.clickedItem);


    $scope.popupHeight = $window.innerHeight - 100;
    $scope.popupWidth = $window.innerWidth - 50;

    if ($scope.popupWidth > 1280){
        $scope.popupWidth = 1280;
    }

    if ($scope.popupHeight > 1280){
        $scope.popupHeight = 1280;
    }

    console.log($scope.popupHeight);

    $scope.staticMap = 'https://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/pin-l-park+482('+$rootScope.clickedItem.longitude+','+$rootScope.clickedItem.latitude+')/'+$rootScope.clickedItem.longitude+','+$rootScope.clickedItem.latitude+',13/'+ $scope.popupWidth + 'x' + $scope.popupHeight + '.png?access_token=pk.eyJ1IjoicnJsYXJhIiwiYSI6IkplNEFnUVUifQ.e5zd5QyoERZ2IHX0EU5pwg';




}]);
