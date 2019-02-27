angular.module('typeTplModule').controller('typeTplCtrl', function ($scope, $state, typeTplSrvc) {

    $scope.Data = {};

    $scope.Func = {
        onScroll: function () {
            let navbar = document.getElementById("type-navigation-bar");
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
            let currentGroup = $state.current.name.split(".")[3];
            typeTplSrvc.getData(page, currentGroup);
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
