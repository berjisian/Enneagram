angular.module('basicsModule', []);
angular.module('basicsModule').factory('basicsSrvc', [
    function() {
        return {
            getData : function (page) {
                $.ajax({
                    url : ("app/assets/Data/basics/" + page + ".txt"),
                    dataType: "text",
                    success : function (data) {
                        $("#basics-content-div").html(data);
                    }
                });
            }
        }
    }
]);