angular.module('otherExamsModule', []);
angular.module('otherExamsModule').factory('otherExamsSrvc', [
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