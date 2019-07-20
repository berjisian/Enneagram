angular.module('enneagramModule').config(['$stateProvider', function($stateProvider) {
    var enneagramStates = [
        {
            name: "home.library.systems.enneagram",
            url: "/enneagram",
            templateUrl: "app/modules/library/systems/enneagram/enneagram.html",
            controller: 'enneagramCtrl'
        }];
    enneagramStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);