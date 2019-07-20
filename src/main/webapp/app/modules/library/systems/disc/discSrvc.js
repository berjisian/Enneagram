angular.module('discModule', []);
angular.module('discModule').factory('discSrvc', [
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