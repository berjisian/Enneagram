angular.module('typeTplModule', []);
angular.module('typeTplModule').factory('typeTplSrvc', [
    function() {
        return {
            getData : function (page) {
                $.ajax({
                    url : ("app/assets/Data/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#type-content-div").html(data);
                    }
                });
            }
        }
    }
]);