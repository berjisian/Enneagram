angular.module('enterExamResultsModule', []);
angular.module('enterExamResultsModule').factory('enterExamResultsSrvc', [
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