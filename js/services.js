Parse.initialize(keys.one, keys.two);

app.factory('dataFactory', ['$q','parsePersistence','parseQuery', function($q,parsePersistence, parseQuery) {
    //return {
    //    //Code edited to create a function as when you require service it returns object by default so you can't return function directly. That's what understand...
    //
    //    getData: function (table, cb) {
    //        var q = $q.defer();
    //        var query = parseQuery.new(table);
    //
    //        query.limit(1000);
    //        query.descending("createAt");
    //
    //        parseQuery.find(query)
    //            .then(function(results) {
    //                //$scope.data.items = results;
    //                //console.log(results);
    //            }, function(error) {
    //                alert(JSON.stringify(error));
    //            });
    //        return q.promise;
    //    }
    //}

    var dataFactory = {};

        dataFactory.getData = function () {

        var query = parseQuery.new('HawaiiTrip');

        query.limit(1000);
        query.descending("createAt");

        parseQuery.find(query)
            .then(function(results) {
                //$scope.data.items = results;
                //console.log(results);
                // nested promise :)
            }, function(error) {
                alert(JSON.stringify(error));
            });
    };

    return dataFactory;


}]);

