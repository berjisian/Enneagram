angular.module('enneagramResultModule', []);
angular.module('enneagramResultModule').factory('enneagramResultSrvc', [
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