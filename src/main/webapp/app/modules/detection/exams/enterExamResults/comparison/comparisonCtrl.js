angular.module('comparisonModule').controller('comparisonCtrl', function ($scope, $state, $uibModal, detectionSrvc) {

    $scope.Data = {
        mode: "comparisonExplanationCard",
        big: {
            openness: "",
            conscientiousness: "",
            extraversion: "",
            agreeableness: "",
            neuroticism: ""
        },
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
        transferredMbtiResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        transferredDiscResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        transferredBigResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        numToWord: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        activeResults: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        possibleGroups: [],
        enneagramResultGroups: [],
        discResultGroups: [],
        quantizedDiscResults: [],
        bigResultGroups: [],
        mbtiResultGroup: ""
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
            if ($state.params.discResultGroups) {
                $scope.Data.discResultGroups = $state.params.discResultGroups.split("X");
                for (let i = 0; i < 4; i++)
                    $scope.Data.discResultGroups[i] = Number($scope.Data.discResultGroups[i]);
                $scope.Func.transferDiscResults();
            }
            if ($state.params.bigResultGroups) {
                $scope.Data.bigResultGroups = $state.params.bigResultGroups.split("X");
                for (let i = 0; i < 5; i++)
                    $scope.Data.bigResultGroups[i] = Number($scope.Data.bigResultGroups[i]);
                $scope.Func.transferBigResults();
            }
            if ($state.params.mbtiResultGroup) {
                $scope.Data.mbtiResultGroup = $state.params.mbtiResultGroup;
                $scope.Func.transferMbtiResult();
            }
            $scope.Func.findActiveResults();
        },
        transferBigResults: function () {
            $scope.Func.quantizeBigResults();
            if (($scope.Data.big.openness === "low" || $scope.Data.big.openness === "middle") &&
                ($scope.Data.big.neuroticism === "middle" || $scope.Data.big.neuroticism === "high") &&
                $scope.Data.big.conscientiousness === "high")
                $scope.Data.transferredBigResult[0] = 1;
            if (($scope.Data.big.conscientiousness === "middle" || $scope.Data.big.conscientiousness === "high") &&
                $scope.Data.big.extraversion === "high" && $scope.Data.big.agreeableness === "high")
                $scope.Data.transferredBigResult[1] = 1;
            if ($scope.Data.big.conscientiousness === "middle" && $scope.Data.big.extraversion === "high")
                $scope.Data.transferredBigResult[2] = 1;
            if ($scope.Data.big.openness === "high" && $scope.Data.big.extraversion === "low" &&
                ($scope.Data.big.agreeableness === "low" || $scope.Data.big.agreeableness === "middle") &&
                $scope.Data.big.neuroticism === "high")
                $scope.Data.transferredBigResult[3] = 1;
            if ($scope.Data.big.openness === "high" && $scope.Data.big.extraversion === "low" &&
                ($scope.Data.big.conscientiousness === "low" || $scope.Data.big.conscientiousness === "middle") &&
                $scope.Data.big.agreeableness === "low" && $scope.Data.big.neuroticism === "low")
                $scope.Data.transferredBigResult[4] = 1;
            if (($scope.Data.big.openness === "low" || $scope.Data.big.openness === "middle") &&
                $scope.Data.big.conscientiousness === "high" && $scope.Data.big.neuroticism === "high" &&
                ($scope.Data.big.agreeableness === "low" || $scope.Data.big.agreeableness === "middle"))
                $scope.Data.transferredBigResult[5] = 1;
            if ($scope.Data.big.openness === "high" && $scope.Data.big.conscientiousness === "low" &&
                $scope.Data.big.extraversion === "high")
                $scope.Data.transferredBigResult[6] = 1;
            if ($scope.Data.big.neuroticism === "high" && $scope.Data.big.agreeableness === "low" &&
                $scope.Data.big.extraversion === "high")
                $scope.Data.transferredBigResult[7] = 1;
            if ($scope.Data.big.agreeableness === "high" && $scope.Data.big.extraversion === "low" &&
                ($scope.Data.big.conscientiousness === "low" || $scope.Data.big.conscientiousness === "middle") &&
                ($scope.Data.big.openness === "low" || $scope.Data.big.openness === "middle") &&
                $scope.Data.big.neuroticism === "low")
                $scope.Data.transferredBigResult[8] = 1;
        },
        quantizeBigResults: function () {
            let bigAttributes = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
            for (let i = 0; i < 5; i++) {
                if ($scope.Data.bigResultGroups[i] < 34)
                    $scope.Data.big[bigAttributes[i]] = "low";
                else if ($scope.Data.bigResultGroups[i] < 67)
                    $scope.Data.big[bigAttributes[i]] = "middle";
                else
                    $scope.Data.big[bigAttributes[i]] = "high";
            }
        },
        transferMbtiResult: function () {
            switch ($scope.Data.mbtiResultGroup) {
                case "INTP":
                    $scope.Data.transferredMbtiResult[3] = 1;
                    $scope.Data.transferredMbtiResult[4] = 1;
                    break;
                case "INFP":
                case "INFJ":
                    $scope.Data.transferredMbtiResult[3] = 1;
                    $scope.Data.transferredMbtiResult[8] = 1;
                    break;
                case "INTJ":
                    $scope.Data.transferredMbtiResult[0] = 1;
                    $scope.Data.transferredMbtiResult[4] = 1;
                    break;
                case "ISTP":
                    $scope.Data.transferredMbtiResult[4] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
                case "ISFP":
                case "ISFJ":
                    $scope.Data.transferredMbtiResult[5] = 1;
                    $scope.Data.transferredMbtiResult[8] = 1;
                    break;
                case "ISTJ":
                    $scope.Data.transferredMbtiResult[0] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
                case "ENTP":
                    $scope.Data.transferredMbtiResult[6] = 1;
                    $scope.Data.transferredMbtiResult[2] = 1;
                    break;
                case "ENFP":
                    $scope.Data.transferredMbtiResult[6] = 1;
                    $scope.Data.transferredMbtiResult[1] = 1;
                    break;
                case "ENTJ":
                case "ESTJ":
                    $scope.Data.transferredMbtiResult[7] = 1;
                    $scope.Data.transferredMbtiResult[2] = 1;
                    break;
                case "ENFJ":
                    $scope.Data.transferredMbtiResult[2] = 1;
                    $scope.Data.transferredMbtiResult[1] = 1;
                    break;
                case "ESTP":
                    // No solid results
                    break;
                case "ESFP":
                    $scope.Data.transferredMbtiResult[1] = 1;
                    $scope.Data.transferredMbtiResult[6] = 1;
                    break;
                case "ESFJ":
                    $scope.Data.transferredMbtiResult[1] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
            }
        },
        transferDiscResults: function () {
            $scope.Func.quantizeDiscResults();
            _.each($scope.Data.quantizedDiscResults, function (discResult) {
                switch (discResult) {
                    case "D":
                        $scope.Data.transferredDiscResult[2] = 1;
                        $scope.Data.transferredDiscResult[6] = 1;
                        $scope.Data.transferredDiscResult[7] = 1;
                        break;
                    case "I":
                        $scope.Data.transferredDiscResult[1] = 1;
                        $scope.Data.transferredDiscResult[2] = 1;
                        $scope.Data.transferredDiscResult[6] = 1;
                        break;
                    case "S":
                        $scope.Data.transferredDiscResult[3] = 1;
                        $scope.Data.transferredDiscResult[5] = 1;
                        $scope.Data.transferredDiscResult[8] = 1;
                        break;
                    case "C":
                        $scope.Data.transferredDiscResult[0] = 1;
                        $scope.Data.transferredDiscResult[4] = 1;
                        $scope.Data.transferredDiscResult[5] = 1;
                        break;
                }
            })
        },
        quantizeDiscResults: function () {
            let discMaxResult = Math.max.apply(Math, $scope.Data.discResultGroups);
            let discTopResults = [];
            discTopResults.push(discMaxResult);
            _.each($scope.Data.discResultGroups, function (discResult) {
                if ((discMaxResult - discResult) < 10)
                    discTopResults.push(discResult);
            });
            let discAttributes = ["C", "S", "I", "D"];
            for (let i = 0; i < 4; i++) {
                if (discTopResults.includes($scope.Data.discResultGroups[i]))
                    $scope.Data.quantizedDiscResults.push(discAttributes[i]);
            }
        },
        findActiveResults: function () {
            for (let i = 0; i < 9; i++) {
                if (!$scope.Data.enneagramResultGroups[i] &&
                    !$scope.Data.possibleGroups[i] &&
                    !$scope.Data.transferredMbtiResult[i] &&
                    !$scope.Data.transferredDiscResult[i] &&
                    !$scope.Data.transferredBigResult[i]) {
                    $scope.Data.activeResults[i] = 0;
                }
            }
        },
        onGroupClick: function (selectedGroup) {
            window.location.href = "#/library/types/" + $scope.Data.numToWord[selectedGroup.value - 1];
        }
    };

    const Run = function () {
        $scope.Func.prepareResults();
    };

    Run();
});
