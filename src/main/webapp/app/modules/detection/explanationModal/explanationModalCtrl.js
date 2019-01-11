angular.module('detectionModule').controller('explanationModalCtrl', function ($scope, $uibModalInstance) {

    $scope.Data = {
        mode: "none",
        selectedGroup: "",
        groups: [
            {
                num: 1,
                name: "asb"
            },
            {
                num: 2,
                name: "asb"
            },
            {
                num: 3,
                name: "asb"
            },
            {
                num: 4,
                name: "asb"
            },
            {
                num: 5,
                name: "asb"
            },
            {
                num: 6,
                name: "asb"
            },
            {
                num: 7,
                name: "asb"
            },
            {
                num: 8,
                name: "asb"
            },
            {
                num: 9,
                name: "asb"
            }
        ],
        selectedGroups: []
    };

    $scope.Func = {
        onCancelClick: function () {
            $uibModalInstance.close(false);
        }
    };

    $scope.Controller = {
        symbolDirective: {
            mode: "none",
            selectedGroup: ""
        }
    };

    const Run = function () {
        $scope.$watch("Controller.symbolDirective.selectedGroup", function () {
            $scope.Data.mode = $scope.Controller.symbolDirective.mode;
            $scope.Data.selectedGroup = $scope.Controller.symbolDirective.selectedGroup;
        }, true);
    };

    Run()
});