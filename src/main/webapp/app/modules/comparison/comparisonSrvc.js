angular.module('comparisonModule', []);
angular.module('comparisonModule').factory('comparisonSrvc', [
    function() {
        return {
            getQuestions : function () {
                return $.ajax({
                    url : ("app/assets/Data/questions.txt"),
                    dataType: "text"
                });
            }
        }
    }
]);