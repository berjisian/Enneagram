angular.module('enneagramExamModule', []);
angular.module('enneagramExamModule').factory('enneagramExamSrvc', [
    function() {
        return {
            getData : function (page) {
                return $.ajax({
                    url : ("app/assets/Data/" + page + ".txt"),
                    dataType: "text",
                });
            }
        }
    }
]);