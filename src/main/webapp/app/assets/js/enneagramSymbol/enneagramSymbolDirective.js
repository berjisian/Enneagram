angular.module("enneagramSymbol", []).directive('enneagramSymbol', function() {
    return {
        restrict : 'E',
        templateUrl : 'app/assets/js/enneagramSymbol/enneagramSymbol.html',
        scope : {

        },

        controller : function($scope) {

            const Run = function () {};

            Run()
        },

        link : function(scope, element, attrs, ctrls) {}
    };
});
