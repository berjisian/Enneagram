angular.module('blogModule').controller('blogCtrl', function ($scope, blogSrvc) {

    $scope.Data = {
        posts: [
            {
                "title": "سلام",
                "date": "2 تیر",
                "content": "<p>این اولین پست بلاگ است</p>"
            },{
                "title": "سلام مجدد",
                "date": "2 تیر",
                "content":  "<p>دومین</p>"
            }
        ]
    };

    $scope.Func = {
        scrollToTop: function () {
            window.scrollTo(0, 0);
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        }
    };

    let Run = function () {
        $scope.Func.scrollToTop();
    };

    Run();
});
