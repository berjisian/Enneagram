angular.module('blogModule').controller('blogCtrl', function ($scope, blogSrvc) {

    $scope.Data = {
        posts: []
    };

    $scope.Func = {
        getBlogPosts: function () {
            blogSrvc.getData().done(function(data) {
                $scope.Data.posts = data;
            });
        }
    };

    let Run = function () {
        $scope.Func.getBlogPosts();
    };

    Run();
});
