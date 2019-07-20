angular.module('mbtiModule', []);
angular.module('mbtiModule').factory('mbtiSrvc', [
    function() {
        return {
            getData : function (page) {
                return $.ajax({
                    url : ("app/assets/Data/systems/" + page + ".txt"),
                    dataType: "text",
                });
            }
        }
    }
]);