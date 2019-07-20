angular.module('enneagramModule', []);
angular.module('enneagramModule').factory('enneagramSrvc', [
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