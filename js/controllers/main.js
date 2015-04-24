/**
 * Created by renerodriguez on 4/22/15.
 */

var app = angular.module('leapspot');

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdBottomSheet', '$rootScope', function($scope, $mdSidenav, $mdBottomSheet, $rootScope){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };


    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };



}]);
