angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal, detectionSrvc) {

    $scope.Data = {
        mode: "none",
        tempProbableGroups: [],
        tempPreferredGroups: [],
        probableGroups: [],
        preferredGroups: [],
        tempResultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultGroups: [],
        mbtiGroups: ["INTJ", "INTP", "INFJ", "INFP", "ISTJ", "ISTP", "ISFJ", "ISFP",
                    "ENTJ", "ENTP", "ENFJ", "ENFP", "ESTJ", "ESTP", "ESFJ", "ESFP"],
        approvedMbtiGroup: "",
        discGroups: ["D", "I", "S", "C"],
        approvedDiscGroup: "",
        finalResult: "",
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
            let omitted = false;
            let list = [];
            if (type === 'probable')
                list = $scope.Data.probableGroups;
            else
                list = $scope.Data.preferredGroups;
            for (let i = 0; i < list.length; i++) {
                if (list[i] === group) {
                    list.splice(i, 1);
                    omitted = true;
                }
            }
            if (!omitted)
                list.push(group);
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
        scrollToTop: function () {
            // window.scrollTo(0, 0);
        },
        calculateFinalResult: function () {
            $scope.Data.finalResult = {
                num: "1",
                name: "one"
            };
        }
    };

    const Run = function () {
        $scope.Func.prepareGroups();
        $scope.Func.prepareQuestions();
    };

    Run();
});
