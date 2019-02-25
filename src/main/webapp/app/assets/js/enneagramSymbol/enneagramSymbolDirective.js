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
                },
                styleHandler: function () {
                    if ($scope.api && $scope.api.style) {
                        _.each($scope.api.style, function (style) {
                            let module = style.module;
                            let cssTag = style.css.split(":")[0];
                            let cssValue = style.css.split(":")[1];
                            $("."+module).css(cssTag, cssValue);
                        });
                    }
                }
            };

            const Run = function () {
                $scope.Func.prepareGroups();
                $scope.Func.styleHandler();
            };

            Run()
        },

        link : function(scope, element, attrs, ctrls) {}
    };
});
