angular.module('typeTplModule').config(['$stateProvider', function($stateProvider) {
    var oneStates = [
        {
            name: "home.library.one",
            url: "/types/one",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'oneCtrl'
        },{
            name: "home.library.two",
            url: "/types/two",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'twoCtrl'
        },{
            name: "home.library.three",
            url: "/types/three",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'threeCtrl'
        },{
            name: "home.library.four",
            url: "/types/four",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'fourCtrl'
        },{
            name: "home.library.five",
            url: "/types/five",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'fiveCtrl'
        },{
            name: "home.library.six",
            url: "/types/six",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'sixCtrl'
        },{
            name: "home.library.seven",
            url: "/types/seven",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'sevenCtrl'
        },{
            name: "home.library.eight",
            url: "/types/eight",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'eightCtrl'
        },{
            name: "home.library.nine",
            url: "/types/nine",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'nineCtrl'
        }];
    oneStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);