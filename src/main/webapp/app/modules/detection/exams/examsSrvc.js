angular.module('examsModule', []);
angular.module('examsModule').factory('examsSrvc', [
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