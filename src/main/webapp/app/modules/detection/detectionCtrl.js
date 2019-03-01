angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal, detectionSrvc) {

    $scope.Data = {
        mode: "none",
        tempProbableGroups: [],
        tempPreferredGroups: [],
        probableGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        preferredGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        tempResultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultGroups: [],
        mbtiGroups: ["INTJ", "INTP", "INFJ", "INFP", "ISTJ", "ISTP", "ISFJ", "ISFP",
                    "ENTJ", "ENTP", "ENFJ", "ENFP", "ESTJ", "ESTP", "ESFJ", "ESFP"],
        approvedMbtiGroup: "",
        transferredMbtiResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        discGroups: ["D", "I", "S", "C"],
        approvedDiscGroup: "",
        transferredDiscResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        finalResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        questions: [],
        currentQuestions: [],
        page: {
            size: 15,
            num: 0
        }
    };

    $scope.Func = {
        prepareGroups: function () {
            for (let i = 1; i < 10; i++)
                $scope.Data.tempProbableGroups.push({
                    value: i,
                    active: false
                });
            $scope.Data.tempPreferredGroups = angular.copy($scope.Data.tempProbableGroups);
        },
        prepareQuestions: function () {
            detectionSrvc.getQuestions().done(function (questionsString) {
                let questions = questionsString.split("\n");
                let i = 0;
                _.each(questions, function (question) {
                    $scope.Data.questions.push({
                        num: i,
                        value: (i+1) + ". " + question,
                        answer: 0
                    });
                    i++;
                });
                $scope.Func.prepareCurrentQuestions();
            });
        },
        onOpenExplanationClick: function () {
            $uibModal.open({
                templateUrl: 'app/modules/detection/explanationModal/explanationModal.html',
                controller: 'explanationModalCtrl',
                windowClass : 'show',
                size: 'lg',
                animation: true,
                resolve: {}
            }).result.then(function () {
                $scope.Data.mode = "selectProbableGroups";
            }, function () {
                $scope.Data.mode = "selectProbableGroups";
            });
        },
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        },
        onGroupClick: function (type, group) {
            let list = [];
            if (type === 'probable')
                list = $scope.Data.probableGroups;
            else
                list = $scope.Data.preferredGroups;
            list[group - 1] = list[group - 1] ? 0 : 1;
            if (type === 'probable')
                $scope.Data.tempProbableGroups[group - 1].active = !$scope.Data.tempProbableGroups[group - 1].active;
            else
                $scope.Data.tempPreferredGroups[group - 1].active = !$scope.Data.tempPreferredGroups[group - 1].active;
        },
        onAnswerSelect: function (answer, questionNum) {
            for (let i = 0; i < $scope.Data.questions.length; i++) {
                if (questionNum === $scope.Data.questions[i].num)
                    $scope.Data.questions[i].answer = answer;
            }
            for (let i = 0; i < $scope.Data.currentQuestions.length; i++) {
                if (questionNum === $scope.Data.currentQuestions[i].num)
                    $scope.Data.currentQuestions[i].answer = answer;
            }
        },
        prepareCurrentQuestions: function () {
            let answer = $scope.Func.isAllAnswered();
            if (answer === "answered") {
                $scope.Data.goingNextPage = false;
                let start = $scope.Data.page.num * $scope.Data.page.size;
                $scope.Data.currentQuestions = angular.copy($scope.Data.questions.slice(start, start + $scope.Data.page.size));
                $scope.Data.page.num++;
                if ($scope.Data.page.num === ($scope.Data.questions.length / $scope.Data.page.size))
                    $scope.Data.lastPage = true;
                $scope.Func.scrollToTop();
            } else {
                $scope.Data.goingNextPage = true;
                $("html, body").animate({scrollTop: $('#question-' + answer.num).offset().top }, 500);
            }
        },
        isAllAnswered: function () {
            let answer = "";
            _.each($scope.Data.currentQuestions, function (question) {
                if (!answer && question.answer === 0)
                    answer = question;
            });
            if (!answer || !$scope.Data.currentQuestions.length)
                answer = "answered";
            return "answered";
        },
        calculateTestResult: function () {
            _.each($scope.Data.questions, function (question) {
                $scope.Data.tempResultGroups[question.num % 9] += question.answer;
            });
            for (let i = 0; i < 9; i++) {
                $scope.Data.resultGroups[i] = {
                    value: i+1,
                    result: Math.floor($scope.Data.tempResultGroups[i] / 15) - 3
                }
            }
            $scope.Data.mode = "showAnswer";
            $scope.Func.scrollToTop();
        },
        transferMbtiResult: function () {
            switch ($scope.Data.approvedMbtiGroup) {
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
        transferDiscResult: function () {
            switch ($scope.Data.approvedDiscGroup) {
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
        },
        scrollToTop: function () {
            // window.scrollTo(0, 0);
            // window.onbeforeunload = function () {
            //     window.scrollTo(0, 0);
            // }
        },
        calculateFinalResult: function () {
            for (let i = 0; i < 9; i++) {
                if ($scope.Data.resultGroups[i])
                    $scope.Data.finalResult[i] =
                        $scope.Data.resultGroups[i].result +
                        $scope.Data.probableGroups[i] +
                        $scope.Data.preferredGroups[i] +
                        $scope.Data.transferredMbtiResult[i] +
                        $scope.Data.transferredDiscResult[i];
            }
        }
    };

    const Run = function () {
        $scope.Func.scrollToTop();
        $scope.Func.prepareGroups();
        $scope.Func.prepareQuestions();
        $scope.$watch("Data.resultGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.probableGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.preferredGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.transferredMbtiResult", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.transferredDiscResult", function () {
            $scope.Func.calculateFinalResult();
        }, true);
    };

    Run();
});
