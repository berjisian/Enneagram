angular.module('typesModule').config(['$stateProvider', function($stateProvider) {
    var typesStates = [
        {
            name: "home.library.types",
            url: "/types",
            templateUrl: "app/modules/library/types/types.html",
            controller: 'typesCtrl'
        }];
    typesStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);