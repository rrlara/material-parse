// Change for your parse credentials here and remove the alert
//alert('Change for your parse credentials here and remove the alert');
// https://parse.com/apps/quickstart#js/existing
Parse.initialize(keys.one, keys.two);

var app = angular.module('leapspot', ['angularParse', 'ngMaterial']);

//app.controller('MainCtrl', function($scope, $timeout, parsePersistence, parseQuery, $rootScope, $mdSidenav, $mdBottomSheet) {
app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdBottomSheet', '$rootScope', 'parsePersistence','parseQuery', function($scope, $mdSidenav, $mdBottomSheet, $rootScope, parsePersistence, parseQuery){


  $scope.data = { 
    items: [],
    total: 0
  }

  var moments = $scope.data.items;

  
  // retrieve a list of 1000 items from server and the total number of items
  $scope.find = function() {

    var query = parseQuery.new('HawaiiTrip');
//      var query = parseQuery.new('observations');

      query.limit(1000);
      query.descending("createAt");

    parseQuery.find(query)
    .then(function(results) {
      $scope.data.items = results;

            console.log(results);

            $rootScope.pointData = results;

      // nested promise :)
      return parseQuery.count(query);
    })
   .then(function(total) {
      $scope.data.total = total;
    }, function(error) {
      alert(JSON.stringify(error));
    });

  };


    app.filter('reverse', function() {
        return function(moments) {
            return moments.slice().reverse();
        };
    });
  
}]);
