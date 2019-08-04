angular.module('enterExamResultsModule').controller('enterExamResultsCtrl', function ($scope, $state, enterExamResultsSrvc) {

    $scope.Data = {
        mode: "enterExamResults",
        enneagramGroups: [
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
        discGroups: [
            {title: "C", farsi: "وظیفه‌گرایی"},
            {title: "S", farsi: "ثبات‌گرایی"},
            {title: "I", farsi: "تأثیرگذاری"},
            {title: "D", farsi: "تسلط‌گرایی"}
        ],
        mbtiGroups: ["INTJ", "INTP", "INFJ", "INFP",
                    "ISTJ", "ISTP", "ISFJ", "ISFP",
                    "ENTJ", "ENTP", "ENFJ", "ENFP",
                    "ESTJ", "ESTP", "ESFJ", "ESFP"],
        bigGroups: [
            {title: "Openness", farsi: "گشودگی"},
            {title: "Conscientiousness", farsi: "مسئولیت‌پذیری"},
            {title: "Extraversion", farsi: "برون‌گرایی"},
            {title: "Agreeableness", farsi: "توافق‌گرایی"},
            {title: "Neuroticism", farsi: "روان‌رنجورخویی"}
        ],
        enneagramResultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        discResultGroups: [0, 0, 0, 0],
        mbtiResultGroup: "",
        bigResultGroups: [0, 0, 0, 0, 0]
    };

    $scope.Func = {
        prepareResults: function () {
            if ($state.params.enneagramResultGroups) {
                $scope.Data.enneagramResultGroups = $state.params.enneagramResultGroups.split("X");
                for (let i = 0; i < 9; i++)
                    $scope.Data.enneagramResultGroups[i] = Number($scope.Data.enneagramResultGroups[i]);
            }
            if ($state.params.discResultGroups) {
                $scope.Data.discResultGroups = $state.params.discResultGroups.split("X");
                for (let i = 0; i < 4; i++)
                    $scope.Data.discResultGroups[i] = Number($scope.Data.discResultGroups[i]);
            }
            if ($state.params.bigResultGroups) {
                $scope.Data.bigResultGroups = $state.params.bigResultGroups.split("X");
                for (let i = 0; i < 5; i++)
                    $scope.Data.bigResultGroups[i] = Number($scope.Data.bigResultGroups[i]);
            }
            if ($state.params.mbtiResultGroup) {
                $scope.Data.mbtiResultGroup = $state.params.mbtiResultGroup;
            }
        },
        calculateResults: function () {
            let enneagramResultsString = "";
            let discResultsString = "";
            let bigResultsString = "";
            if (!$scope.Data.enneagramResultGroups.every(item => item === 0))
                for (let i = 0; i < 9; i++) {
                    enneagramResultsString += ($scope.Data.enneagramResultGroups[i]);
                    if (i < 8)
                        enneagramResultsString += "X";
                }
            if (!$scope.Data.discResultGroups.every(item => item === 0))
                for (let i = 0; i < 4; i++) {
                    discResultsString += ($scope.Data.discResultGroups[i]);
                    if (i < 3)
                        discResultsString += "X";
                }
            if (!$scope.Data.bigResultGroups.every(item => item === 0))
                for (let i = 0; i < 5; i++) {
                    bigResultsString += ($scope.Data.bigResultGroups[i]);
                    if (i < 4)
                        bigResultsString += "X";
                }
            $state.go('home.detection.exams.enterExamResults.comparison', {
                possibleGroups: $state.params.possibleGroups,
                enneagramResultGroups: enneagramResultsString,
                discResultGroups: discResultsString,
                bigResultGroups: bigResultsString,
                mbtiResultGroup: $scope.Data.mbtiResultGroup
            });
        }
    };

    $scope.Slider = {
        enneagramOptions: {
            floor: 0,
            ceil: 8,
            vertical: true,
            showSelectionBar: true
        },
        discOptions: {
            floor: 0,
            ceil: 100,
            vertical: true,
            showSelectionBar: true
        },
        bigOptions: {
            floor: 0,
            ceil: 100,
            vertical: true,
            showSelectionBar: true
        }
    };

    let Run = function () {
        $scope.Func.prepareResults();
    };

    Run();
});
