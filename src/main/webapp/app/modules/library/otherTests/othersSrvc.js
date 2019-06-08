angular.module('othersModule', []);
angular.module('othersModule').factory('othersSrvc', [
    function() {
        return {
            getData : function (page) {
                $.ajax({
                    url : ("app/assets/Data/others/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#others-content-div").html(data);
                    }
                });
            }
        }
    }
]);