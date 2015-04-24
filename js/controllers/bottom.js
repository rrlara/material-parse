/**
 * Created by renerodriguez on 4/22/15.
 */

var app = angular.module('leapspot');

app.controller('ListBottomSheetCtrl', ['$scope', '$mdSidenav', '$http', function($scope, $mdSidenav, $http){
    $scope.items = [
        { name: 'Share', icon: 'share-arrow' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };

    $scope.staticMap = 'https://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/pin-l-park+482(-73.975,40.767)/-73.975,40.767,17/500x300.png?access_token=pk.eyJ1IjoicnJsYXJhIiwiYSI6IkplNEFnUVUifQ.e5zd5QyoERZ2IHX0EU5pwg';


}]);
