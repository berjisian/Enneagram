angular.module('typeTplModule').controller('typeTplCtrl', function ($scope, $state, typeTplSrvc) {

    $scope.Data = {
        currentGroup: "",
        groups: [
            {title: "کمال‌گرا", value: 1, state: "one"},
            {title: "یاری‌رسان", value: 2, state: "two"},
            {title: "موفقیت‌طلب", value: 3, state: "three"},
            {title: "فردگرا", value: 4, state:"four"},
            {title: "جستجوگر", value: 5, state: "five"},
            {title: "وفادار", value: 6, state: "six"},
            {title: "خوش‌گذران", value: 7, state: "seven"},
            {title: "رهبر", value: 8, state: "eight"},
            {title: "میانجی", value: 9, state: "nine"},
        ],
        entry: [],
        currentPage: -1,
        maxPageNum: 0
    };

    $scope.Func = {
        loadData: function () {
            $scope.Data.currentGroup = $scope.Data.groups.find(group => group.state === $state.current.name.split(".")[3]).value - 1;
            typeTplSrvc.getData($scope.Data.groups[$scope.Data.currentGroup].state).done(function (result) {
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
            $("#type-content-div").html($scope.Data.entry[$scope.Data.currentPage]);
        }
    };

    let Run = function () {
        $scope.Func.loadData();
    };

    Run();
});
