angular.module('blogModule').controller('blogCtrl', function ($scope, blogSrvc) {

    $scope.Data = {
        posts: []
    };

    $scope.Func = {
        scrollToTop: function () {
            window.scrollTo(0, 0);
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        },
        getBlogPosts: function () {
            blogSrvc.getData().done(function(data) {
                $scope.Data.posts = data;
            });
        }
    };

    let Run = function () {
        $scope.Func.scrollToTop();
        $scope.Func.getBlogPosts();
    };

    Run();
});
