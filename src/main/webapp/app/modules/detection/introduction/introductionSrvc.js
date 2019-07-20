angular.module('introductionModule', []);
angular.module('introductionModule').factory('introductionSrvc', [
    function() {
        return {
            getData : function (page) {
                return $.ajax({
                    url : ("app/assets/Data/groups/" + page + ".txt"),
                    dataType: "text",
                });
            }
        }
    }
]);