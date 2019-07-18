angular.module('personalityModule', []);
angular.module('personalityModule').factory('personalitySrvc', [
    function() {
        return {
            getData : function (page) {
                return $.ajax({
                    url : ("app/assets/Data/basics/" + page + ".txt"),
                    dataType: "text",
                });
            }
        }
    }
]);