/**
 * Created by renerodriguez on 4/22/15.
 */

var app = angular.module('StarterApp');

app.controller('MapCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    var map = L.map('map', { }).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //
    //$scope.staticMap = 'https://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/pin-l-park+482(-73.975,40.767)/-73.975,40.767,17/500x300.png?access_token=pk.eyJ1IjoicnJsYXJhIiwiYSI6IkplNEFnUVUifQ.e5zd5QyoERZ2IHX0EU5pwg';


}]);
