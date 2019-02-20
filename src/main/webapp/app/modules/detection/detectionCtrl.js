angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal) {

    $scope.Data = {
        mode: "none",
        tempProbableGroups: [],
        tempPreferredGroups: [],
        probableGroups: [],
        preferredGroups: [],
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
            size: 10,
            num: 0
        },
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
            for (let i = 0; i < 100; i++) {
                $scope.Data.questions.push({
                    num: i,
                    value: "سؤال " + (i+1),
                    answer: 0
                })
            }
            $scope.Func.prepareCurrentQuestions();
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
            let start = $scope.Data.page.num * $scope.Data.page.size;
            $scope.Data.currentQuestions = angular.copy($scope.Data.questions.slice(start, start + $scope.Data.page.size));
            $scope.Data.page.num++;
            if ($scope.Data.page.num === ($scope.Data.questions.length / $scope.Data.page.size))
                $scope.Data.lastPage = true;
        },
        calculateTestResult: function () {
        //    TODO: Result Calculation
            for (let i = 0; i < 9; i++) {
                $scope.Data.resultGroups[i] = {
                    value: i+1,
                    result: 1
                }
            }
            $scope.Data.mode = "showAnswer";
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
