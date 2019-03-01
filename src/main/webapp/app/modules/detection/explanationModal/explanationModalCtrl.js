angular.module('detectionModule').controller('explanationModalCtrl', function ($scope, $uibModalInstance) {

    $scope.Data = {
        selectedGroup: "",
        groups: [],
        selectedGroups: []
    };

    $scope.Func = {
        prepareGroups: function () {
            for (let i = 1; i < 10; i++)
                $scope.Data.groups.push({
                    value: i,
                    active: false
                });
        },
        onGroupClick: function (selectedGroup) {
            _.each($scope.Data.groups, function (group) {
                if (group === selectedGroup)
                    group.active = true;
                else
                    group.active = false;
            });
        },
        onCancelClick: function () {
            $uibModalInstance.close(false);
        }
    };

    let Run = function () {
        $scope.Func.prepareGroups();
    };

    Run()
});