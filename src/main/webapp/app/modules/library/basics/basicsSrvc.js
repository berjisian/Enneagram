angular.module('basicsModule', []);
angular.module('basicsModule').factory('basicsSrvc', [
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