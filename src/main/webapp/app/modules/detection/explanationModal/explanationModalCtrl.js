angular.module('detectionModule').controller('explanationModalCtrl', function ($scope, $uibModalInstance) {

    $scope.Data = {};

    $scope.Func = {
        onCancelClick: function () {
            $uibModalInstance.close(false);
        }
    };
});