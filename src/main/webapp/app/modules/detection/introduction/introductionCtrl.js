angular.module('introductionModule').controller('introductionCtrl', function ($scope, $state, introductionSrvc) {

    $scope.Data = {
        mode: "introductionDescription",
        entry: [],
        currentPage: -1,
        maxPageNum: 0,
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
        possibleGroups: [
                        0, 0, 0,
                        0, 0, 0,
                        0, 0, 0
                        ]
    };

    $scope.Func = {
        loadData: function (page) {
            $scope.Data.page = page;
            introductionSrvc.getData(page).done(function (result) {
                $scope.Data.entry = result.split("pageEnder");
                $scope.Data.maxPageNum = $scope.Data.entry.length - 1;
                $scope.Func.changePage("next");
            });
        },
        changePage: function (direction, selectedPage) {
            if (selectedPage)
                $scope.Data.currentPage = selectedPage - 1;
            else {
                let changeValue = (direction === "next") ? 1 : -1;
                $scope.Data.currentPage += changeValue;
            }
        },
        onGroupSelect: function (group) {
            $scope.Data.mode = "showGroupIntroduction";
            $scope.Func.changePage(0, group);
        },
        onSelectPossibleGroups: function (possibleGroup) {
            if (!$scope.Data.possibleGroups[possibleGroup]) {
                $scope.Data.possibleGroups[possibleGroup] = 1;
                toastr.success('شما فکر می‌کنید عضو گروه ' + (possibleGroup + 1) + ' هستید.');
            } else {
                $scope.Data.possibleGroups[possibleGroup] = 0;
                toastr.error('شما فکر نمی‌کنید عضو گروه ' + (possibleGroup + 1) + ' باشید.');
            }
        },
        goToSelectExamsPage: function () {
            $scope.Data.mode = 'introductionDescription';
            let possibleGroupsString = "";
            for (let i = 0; i < 9; i++) {
                possibleGroupsString += ($scope.Data.possibleGroups[i]);
                if (i < 8)
                    possibleGroupsString += "X";
            }
            $state.go('home.detection.exams', {possibleGroups: possibleGroupsString});
        }
    };

    toastr.options = {
        "closeMethod": "fadeOut",
        "positionClass": "toast-bottom-right",
        "closeDuration": 300,
        "closeEasing": 'swing',
        "extendedTimeOut": 1000,
        "rtl": true
    };

    let Run = function () {
        $scope.Data.$contentDiv = $("#group-introduction-content-div");
        $scope.Func.loadData("introduction");
    };

    Run();
});
