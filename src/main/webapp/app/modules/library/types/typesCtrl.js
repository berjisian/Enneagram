angular.module('typesModule').controller('typesCtrl', function ($scope) {

    $scope.Data = {
        numToWord: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        groups: [
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
    };

    $scope.Func = {
        onGroupSelect: function (selectedGroup) {
            window.location.href = "#/library/types/" + $scope.Data.numToWord[selectedGroup - 1];
        }
    };

    let Run = function () {};

    Run();
});
