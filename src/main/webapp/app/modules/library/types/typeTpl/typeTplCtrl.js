angular.module('typeTplModule').controller('typeTplCtrl', function ($scope) {

    $scope.Data = {};

    $scope.Func = {
        myFunction: function () {
            let navbar = document.getElementById("type-navigation-bar");
            let sticky = navbar.offsetTop + 192;
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    };

    let Run = function () {
        window.onscroll = function () {
            $scope.Func.myFunction()
        };
    };

    Run();
});
