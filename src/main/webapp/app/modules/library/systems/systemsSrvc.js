angular.module('systemsModule', []);
angular.module('systemsModule').factory('systemsSrvc', [
    function() {
        return {
            getData : function (page) {
                $.ajax({
                    url : ("app/assets/Data/systems/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#systems-content-div").html(data);
                    }
                });
            }
        }
    }
]);