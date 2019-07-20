angular.module('discModule').controller('discCtrl', function ($scope, discSrvc) {

    $scope.Data = {
        entry: [],
        currentPage: -1,
        maxPageNum: 0
    };

    $scope.Func = {
        loadData: function (page) {
            $scope.Data.page = page;
            discSrvc.getData(page).done(function (result) {
                $scope.Data.entry = result.split("pageEnder");
                $scope.Data.maxPageNum = $scope.Data.entry.length - 1;
                $scope.Func.changePage("next");
            });
        },
        changePage: function (direction) {
            var changeValue = (direction === "next") ? 1 : -1;
            $scope.Data.currentPage += changeValue;
            $("#disc-content-div").html($scope.Data.entry[$scope.Data.currentPage]);
        }
    };

    let Run = function () {
        $scope.Func.loadData("disc");
    };

    Run();
});
