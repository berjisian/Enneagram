angular.module('typesModule').controller('typesCtrl', function ($scope) {

    $scope.Data = {
        groups: [],
        numToWord: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
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
            window.location.href = "#/library/types/" + $scope.Data.numToWord[selectedGroup.value - 1];
        }
    };

    let Run = function () {
        $scope.Func.prepareGroups();
    };

    Run();
});
