angular.module('typesModule').controller('typesCtrl', function ($scope) {

    $scope.Data = {
        numToWord: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    };

    $scope.Func = {};

    $scope.Controller = {
        symbolDirective: {
            mode: "none",
            selectedGroup: ""
        }
    };

    let Run = function () {
        $scope.$watch("Controller.symbolDirective.selectedGroup", function () {
            if ($scope.Controller.symbolDirective.selectedGroup)
                window.location.href = "#/library/types/" + $scope.Data.numToWord[$scope.Controller.symbolDirective.selectedGroup - 1];
        }, true);
    };

    Run();
});
