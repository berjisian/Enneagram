angular.module('bigModule', []);
angular.module('bigModule').factory('bigSrvc', [
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