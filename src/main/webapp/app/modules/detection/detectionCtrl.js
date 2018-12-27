angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal) {

    $scope.Data = {};

    $scope.Func = {
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        }
    };

    const Run = function () {};

    Run();
});
