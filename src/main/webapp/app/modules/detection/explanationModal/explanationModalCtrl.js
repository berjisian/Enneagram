angular.module('detectionModule').controller('explanationModalCtrl', function ($scope, $uibModalInstance) {

    $scope.Data = {
        mode: "none",
        selectedGroup: ""
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