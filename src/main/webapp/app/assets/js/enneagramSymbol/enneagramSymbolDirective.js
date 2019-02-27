angular.module("enneagramSymbol", []).directive('enneagramSymbol', function() {
    return {
        restrict : 'E',
        templateUrl : 'app/assets/js/enneagramSymbol/enneagramSymbol.html',
        scope : {
            api: '='
        },

        controller : function($scope) {

            $scope.Data = {
                groups: []
            };

            $scope.Func = {
                prepareGroups: function () {
                    for (let i = 1; i < 10; i++)
                        $scope.Data.groups.push(i);
                },
                onGroupSelect: function (groupNum) {
                    $scope.api.selectedGroup = groupNum;
                    $scope.api.mode = "selected"
                }
            };

            const Run = function () {
                $scope.Func.prepareGroups();
            };

            Run()
        },

        link : function(scope, element, attrs, ctrls) {}
    };
});
