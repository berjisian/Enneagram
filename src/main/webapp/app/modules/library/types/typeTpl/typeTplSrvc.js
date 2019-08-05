angular.module('typeTplModule', []);
angular.module('typeTplModule').factory('typeTplSrvc', [
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