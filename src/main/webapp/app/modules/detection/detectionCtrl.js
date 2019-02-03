angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal) {

    $scope.Data = {
        mode: "none"
    };

    $scope.Func = {
        onOpenExplanationClick: function () {
            $uibModal.open({
                templateUrl: 'app/modules/detection/explanationModal/explanationModal.html',
                controller: 'explanationModalCtrl',
                windowClass : 'show',
                size: 'lg',
                animation: true,
                resolve: {}
            }).result.then(function () {
                $scope.Data.mode = "selectProbable";
            }, function () {
                $scope.Func.onCancelExplanationClick();
            });
        },
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        }
    };

    const Run = function () {};

    Run();
});
