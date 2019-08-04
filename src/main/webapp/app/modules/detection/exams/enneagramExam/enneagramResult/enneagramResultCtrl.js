angular.module('enneagramResultModule').controller('enneagramResultCtrl', function ($scope, $state, enneagramResultSrvc) {

    $scope.Data = {
        mode: "enneagramResultExplanationCard",
        introductionGroups: [
            {title: "کمال‌گرا", value: 1},
            {title: "یاری‌رسان", value: 2},
            {title: "موفقیت‌طلب", value: 3},
            {title: "فردگرا", value: 4},
            {title: "جستجوگر", value: 5},
            {title: "وفادار", value: 6},
            {title: "خوش‌گذران", value: 7},
            {title: "رهبر", value: 8},
            {title: "میانجی", value: 9},
        ],
        numToWord: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        possibleGroups: [],
        enneagramResultGroups: [],
        activeResults: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    };

    $scope.Func = {
        prepareResults: function () {
            if ($state.params.possibleGroups) {
                $scope.Data.possibleGroups = $state.params.possibleGroups.split("X");
                for (let i = 0; i < 9; i++)
                    $scope.Data.possibleGroups[i] = Number($scope.Data.possibleGroups[i]);
            }
            if ($state.params.enneagramResultGroups) {
                $scope.Data.enneagramResultGroups = $state.params.enneagramResultGroups.split("X");
                for (let i = 0; i < 9; i++)
                    $scope.Data.enneagramResultGroups[i] = Number($scope.Data.enneagramResultGroups[i]);
            }
            $scope.Func.findActiveResults();
        },
        findActiveResults: function () {
            for (let i = 0; i < 9; i++) {
                if ($scope.Data.possibleGroups && $scope.Data.possibleGroups.length) {
                    if ($scope.Data.enneagramResultGroups[i] === 0 && $scope.Data.possibleGroups[i] === 0)
                        $scope.Data.activeResults[i] = 0;
                } else if ($scope.Data.enneagramResultGroups[i] === 0)
                    $scope.Data.activeResults[i] = 0;
            }
        },
        onMoveBackToExams: function () {
            $scope.Data.mode = 'enneagramResultExplanationCard';
            $state.go('home.detection.exams', {
                possibleGroups: $state.params.possibleGroups,
                enneagramResultGroups: $state.params.enneagramResultGroups
            });
        }
    };

    let Run = function () {
        $scope.Func.prepareResults();
    };

    Run();
});
