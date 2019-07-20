angular.module('bigModule').controller('bigCtrl', function ($scope, bigSrvc) {

    $scope.Data = {
        entry: [],
        currentPage: -1,
        maxPageNum: 0
    };

    $scope.Func = {
        loadData: function (page) {
            $scope.Data.page = page;
            bigSrvc.getData(page).done(function (result) {
                $scope.Data.entry = result.split("pageEnder");
                $scope.Data.maxPageNum = $scope.Data.entry.length - 1;
                $scope.Func.changePage("next");
            });
        },
        changePage: function (direction) {
            var changeValue = (direction === "next") ? 1 : -1;
            $scope.Data.currentPage += changeValue;
            $("#big-content-div").html($scope.Data.entry[$scope.Data.currentPage]);
        }
    };

    let Run = function () {
        $scope.Func.loadData("big");
    };

    Run();
});
