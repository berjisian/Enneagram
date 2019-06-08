angular.module('othersModule').controller('othersCtrl', function ($scope, othersSrvc) {

    $scope.Data = {};

    $scope.Func = {
        onScroll: function () {
            let navbar = document.getElementById("others-navigation-bar");
            if (navbar) {
                let sticky = navbar.offsetTop + 192;
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky");
                }
            }
        },
        onPageSelect: function (page) {
            $scope.Data.page = page;
            othersSrvc.getData(page);
            window.scrollTo(0, 0);
        }
    };

    let Run = function () {
        window.onscroll = function () {
            $scope.Func.onScroll()
        };
        $scope.Func.onPageSelect("mbti");
    };

    Run();
});
