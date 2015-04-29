/**
 * Created by renerodriguez on 4/22/15.
 */

//var app = angular.module('leapspot');
Parse.initialize(keys.one, keys.two);

app.controller('ContentCtrl', function($scope, $rootScope, $mdSidenav, $mdBottomSheet, dataFactory, parsePersistence, parseQuery){

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

    $scope.loadingMoments = false;

    // retrieve a list of 1000 items from server and the total number of items
    $scope.find = function() {

        $scope.loadingMoments = true;

        var query = parseQuery.new('HawaiiTrip');

        query.limit(1000);
        query.descending("createAt");

        parseQuery.find(query)
            .then(function(results) {
                $scope.loadingMoments = false;
                    $scope.data.items = results;
                //console.log(results);
                // nested promise :)
            }, function(error) {
                $scope.loadingMoments = false;
                    alert(JSON.stringify(error));
            });

    }
    function initialLoadOfMoments(){
        $scope.find();
    }
    initialLoadOfMoments();



    $rootScope.getLatLngs = function (item){

        $rootScope.clickedItem = item.attributes;

    }

    $scope.timeFromNow = function (dateAgo){

        //var dateA = moment().subtract('days', 7);
        //console.log(dateA.fromNow());
        var dateNow = new Date();

        var date1 = moment(dateAgo);
        //var date2 = moment('2014-12-11');
        console.log(date1.from(dateNow));

        var daysAgo = moment(dateAgo).fromNow();

        console.log(daysAgo);

        return daysAgo;

    }


    $scope.todos = [
        {
            face : './img/profile.jpg',
            what: 'Brunch this weekend?',
            who: 'Rene Rodriguez',
            when: '3:08PM',
            notes: "GIS-Developer/Film-maker"
        }]




});
