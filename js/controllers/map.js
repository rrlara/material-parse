/**
 * Created by renerodriguez on 4/22/15.
 */

//var app = angular.module('leapspot');

app.controller('MapCtrl', ['$scope', function($scope, $window){


    //$scope.popupHeight = $window.innerHeight - 200;
    //$scope.popupWidth = $window.innerWidth - 200;

    $scope.popupHeight = 200;

    //$scope.mapStatus = false;

    //if($scope.mapStatus == false){
    //    $scope.mapStatus = true;
        var map = L.map('map', { }).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png').addTo(map);
    //}

    L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);





}]);
