angular.module('typeTplModule', []);
angular.module('typeTplModule').factory('typeTplSrvc', [
    function() {
        return {
            getData : function (page, currentGroup) {
                $.ajax({
                    url : ("app/assets/Data/groups/" + currentGroup + "/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#type-content-div").html(data);
                    }
                });
            }
        }
    }
]);