angular.module('typeTplModule').config(['$stateProvider', function($stateProvider) {
    let oneStates = [
        {
            name: "home.library.typeTpl",
            url: "",
            templateUrl: "app/modules/library/types/typeTpl/typeTpl.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.one",
            url: "/types/one",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.two",
            url: "/types/two",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.three",
            url: "/types/three",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.four",
            url: "/types/four",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.five",
            url: "/types/five",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.six",
            url: "/types/six",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.seven",
            url: "/types/seven",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.eight",
            url: "/types/eight",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        },{
            name: "home.library.typeTpl.nine",
            url: "/types/nine",
            templateUrl: "app/modules/library/types/typeTpl/typePage.html",
            controller: 'typeTplCtrl'
        }];
    oneStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);