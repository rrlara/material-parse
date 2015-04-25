/**
 * Created by renerodriguez on 4/22/15.
 */

//var app = angular.module('leapspot');

app.controller('ContentCtrl', function($scope, $rootScope, $mdSidenav, $mdBottomSheet, dataFactory){

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

    $rootScope.data = {
        items: [],
        total: 0
    }

    // retrieve a list of 1000 items from server and the total number of items
    $scope.find = function() {

        //dataFactory.getData('HawaiiTrip').then(function (data) {
        //        console.log(data);
        //        $rootScope.data.items = data;
        //    });

        dataFactory.getData('HawaiiTrip', function (data) {
            console.log(data);
            $rootScope.data.items = data;
        });

    }




});
