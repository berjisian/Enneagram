angular.module('homeModule').controller('homeCtrl', function ($scope) {

    $scope.Data = {};

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
