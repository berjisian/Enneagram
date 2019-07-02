angular.module('personalityModule', []);
angular.module('personalityModule').factory('personalitySrvc', [
    function() {
        return {
            getData : function (page) {
                $.ajax({
                    url : ("app/assets/Data/basics/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#personality-content-div").html(data);
                    }
                });
            }
        }
    }
]);