angular.module('basicsModule').controller('basicsCtrl', function ($scope, $state, basicsSrvc) {

    $scope.Data = {
        entry: [],
        currentPage: -1,
        maxPageNum: 0,
        selectedGroup: ""
    };

    $scope.Func = {
        loadData: function (page) {
            $scope.Data.page = page;
            basicsSrvc.getData(page).done(function (result) {
                result = $scope.Func.loadPic(result);
                $scope.Data.entry = result.split("pageEnder");
                $scope.Data.maxPageNum = $scope.Data.entry.length - 1;
                $scope.Func.changePage("next");
            });
        },
        loadPic: function (displayText) {
            displayText = displayText.replace("enneagramPic", "<img class='enneagram-pic' src='/app/assets/images/Enneagram.png'>");
            displayText = displayText.replace("changePathPic", "<img class='change-path-pic' src='/app/assets/images/change.png'>");
            return displayText;
        },
        changePage: function (direction, selectedPage) {
            if (selectedPage)
                $scope.Data.currentPage = selectedPage - 1;
            else {
                let changeValue = (direction === "next") ? 1 : -1;
                $scope.Data.currentPage += changeValue;
            }
            $("#basics-content-div").html($scope.Data.entry[$scope.Data.currentPage]);
        },
        goToSelectedGroup: function () {
            window.location.href = "#/library/types/" + $scope.Data.selectedGroup;
        }
    };

    let Run = function () {
        if ($state.params.selectedGroup)
            $scope.Data.selectedGroup = $state.params.selectedGroup;
        $scope.Func.loadData("basics");
    };

    Run();
});
