var app = angular.module('leapspot')
    .factory('dataFactory', ['$http', function($http) {
//
//    var dataFactory = {};
//
//    dataFactory.getObservations = function () {
//
////        var url = "https://s3-us-west-2.amazonaws.com/worldcup14/Observations.json";
////        // var url = 'data/Observations.json';
////        return $http.get(url);
//    };
//
//    return dataFactory;
//
//
//}]);

/**
 * Created by renerodriguez on 11/16/14.
 */
// Change for your parse credentials here and remove the alert
//alert('Change for your parse credentials here and remove the alert');
// https://parse.com/apps/quickstart#js/existing
Parse.initialize("f978idlmBlmLY2CnQwovpPtQaFwvALWhDlf6RE53", "yFJzzjG5oasySFmbNPumsxCaUofcolddTUIDQAKK");

var app = angular.module('leapspot', ['angularParse']);

app.controller('MainCtrl', function($scope, $timeout, parsePersistence, parseQuery, $rootScope) {

    var dataFactory = {};

    // adds a new object to server
    dataFactory.add = function() {

        var testObject = parsePersistence.new('trueHeading');

        parsePersistence.save(testObject, {foo: "bar promise",text: "orale"})
            .then(function(object) {
                $scope.data.items.push(object);
                $scope.data.total++;
            }, function(error) {
                alert(JSON.stringify(error));
            });
    }

    // retrieve a list of 1000 items from server and the total number of items
    dataFactory.find = function() {

        var query = parseQuery.new('trueHeading');
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

    // removes an object from server
    dataFactory.destroy = function(obj) {

        parsePersistence.destroy(obj)
            .then(function(result) {
                $scope.data.items.splice($scope.data.items.indexOf(obj),1);
                $scope.data.total--;
            }, function(error) {
                alert(JSON.stringify(error));
            });

    }

    return dataFactory;

});


