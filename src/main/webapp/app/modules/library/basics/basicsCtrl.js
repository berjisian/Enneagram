angular.module('basicsModule').controller('basicsCtrl', function ($scope, basicsSrvc) {

    $scope.Data = {};

    $scope.Func = {
        onScroll: function () {
            let navbar = document.getElementById("basics-navigation-bar");
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
            basicsSrvc.getData(page);
            window.scrollTo(0, 0);
        }
    };

    let Run = function () {
        window.onscroll = function () {
            $scope.Func.onScroll()
        };
        $scope.Func.onPageSelect("introduction");
    };

    Run();
});
