angular.module('basicsModule').config(['$stateProvider', function($stateProvider) {
    var basicsStates = [
        {
            name: "home.library.basics",
            url: "/basics?selectedGroup",
            templateUrl: "app/modules/library/basics/basics.html",
            controller: 'basicsCtrl'
        }];
    basicsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);