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
            {title: "Agreeableness", farsi: "توافق‌گرایی"},
            {title: "Conscientiousness", farsi: "مسئولیت‌پذیری"},
            {title: "Extraversion", farsi: "برون‌گرایی"},
            {title: "Neuroticism", farsi: "روان‌رنجورخویی"},
            {title: "Openness", farsi: "گشودگی"}
        ],
        resultGroups: [0, 0, 0, 0, 0, 0, 0, 0 ,0],
        discResultGroups: [0, 0, 0, 0],
        mbtiResultGroup: "",
        bigResultGroups: [0, 0, 0, 0, 0]
    };

    $scope.Func = {
        prepareResults: function () {
            if ($state.params.resultGroups) {
                $scope.Data.resultGroups = $state.params.resultGroups.split("X");
                for (let i = 0; i < 9; i++)
                    $scope.Data.resultGroups[i] = Number($scope.Data.resultGroups[i]);
            }
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
