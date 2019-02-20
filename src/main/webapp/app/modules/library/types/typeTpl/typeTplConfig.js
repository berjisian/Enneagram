angular.module('typeTplModule').config(['$stateProvider', function($stateProvider) {
    var oneStates = [
        {
            name: "home.library.typeTpl",
            url: "",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.one",
            url: "/types/one",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'oneCtrl'
        },{
            name: "home.library.typeTpl.two",
            url: "/types/two",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'twoCtrl'
        },{
            name: "home.library.typeTpl.three",
            url: "/types/three",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'threeCtrl'
        },{
            name: "home.library.typeTpl.four",
            url: "/types/four",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'fourCtrl'
        },{
            name: "home.library.typeTpl.five",
            url: "/types/five",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'fiveCtrl'
        },{
            name: "home.library.typeTpl.six",
            url: "/types/six",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'sixCtrl'
        },{
            name: "home.library.typeTpl.seven",
            url: "/types/seven",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'sevenCtrl'
        },{
            name: "home.library.typeTpl.eight",
            url: "/types/eight",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'eightCtrl'
        },{
            name: "home.library.typeTpl.nine",
            url: "/types/nine",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'nineCtrl'
        }];
    oneStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);