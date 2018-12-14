angular.module('libraryModule').config(['$stateProvider', function($stateProvider) {
    var libraryStates = [
        {
            name: "home.library",
            url: "/library",
            templateUrl: "app/modules/library/library.html",
            controller: 'libraryCtrl'
        }];
    libraryStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);