angular.module('blogModule', []);
angular.module('blogModule').factory('blogSrvc', [
    function() {
        return {
            getData : function () {
                return $.getJSON("app/assets/Data/blog.json");
            }
        }
    }
]);