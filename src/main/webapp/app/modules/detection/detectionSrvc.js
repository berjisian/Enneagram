angular.module('detectionModule', []);
angular.module('detectionModule').factory('detectionSrvc', [
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