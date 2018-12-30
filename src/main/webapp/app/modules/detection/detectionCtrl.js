angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal) {

    $scope.Data = {};

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
                $scope.Func.onCancelExplanationClick();
            }, angular.noop);
        },
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        }
    };

    const Run = function () {};

    Run();
});
