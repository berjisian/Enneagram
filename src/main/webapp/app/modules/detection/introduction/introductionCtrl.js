angular.module('introductionModule').controller('introductionCtrl', function ($scope, introductionSrvc) {

    $scope.Data = {
        entry: [],
        currentPage: -1,
        maxPageNum: 0
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
        changePage: function (direction) {
            var changeValue = (direction === "next") ? 1 : -1;
            $scope.Data.currentPage += changeValue;
            $("#introduction-content-div").html($scope.Data.entry[$scope.Data.currentPage]);
        }
    };

    let Run = function () {
        $scope.Func.loadData("introduction");
    };

    Run();
});
