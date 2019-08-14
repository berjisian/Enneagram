angular.module('homeModule').controller('homeCtrl', function ($scope, $state) {

    $scope.Data = {
        groups: [
            {title: "کمال‌گرا", value: 1, state: "one"},
            {title: "یاری‌رسان", value: 2, state: "two"},
            {title: "موفقیت‌طلب", value: 3, state: "three"},
            {title: "فردگرا", value: 4, state: "four"},
            {title: "جستجوگر", value: 5, state: "five"},
            {title: "وفادار", value: 6, state: "six"},
            {title: "خوش‌گذران", value: 7, state: "seven"},
            {title: "رهبر", value: 8, state: "eight"},
            {title: "میانجی", value: 9, state: "nine"},
        ],
        mode: "initial",
        comparisonAvailable: false
    };

    $scope.Func = {};

    let Run = function () {
        $scope.$watchCollection(function () {
            return $state.params;
        }, function () {
            if ($state.params.bigResultGroups || $state.params.discResultGroups || $state.params.enneagramResultGroups || $state.params.mbtiResultGroup || $state.params.possibleGroups)
                $scope.Data.comparisonAvailable = true;
        });
    };

    Run();
});
