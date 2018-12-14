angular.module('blogModule').config(['$stateProvider', function($stateProvider) {
    var blogStates = [
        {
            name: "home.blog",
            url: "/blog",
            templateUrl: "app/modules/blog/blog.html",
            controller: 'blogCtrl'
        }];
    blogStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);