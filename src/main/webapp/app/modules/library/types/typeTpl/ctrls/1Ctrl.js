angular.module('typeTplModule').controller('oneCtrl', function ($scope) {

    $scope.Data = {
        typeNum: "One",
        content: "" +
            "            <h2>Auto Sidebar</h2>\n" +
            "            <p>This sidebar is as tall as its content (the links), and is always shown.</p>\n" +
            "            <p>Scroll down the page to see the result.</p>\n" +
            "            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset\n" +
            "                concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur\n" +
            "                eum.\n" +
            "                Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
            "            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset\n" +
            "                concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur\n" +
            "                eum.\n" +
            "                Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
            "            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset\n" +
            "                concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur\n" +
            "                eum.\n" +
            "                Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
            "            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset\n" +
            "                concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur\n" +
            "                eum.\n" +
            "                Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>"
    };

    $scope.Func = {};

    let Run = function () {
        $("#type-content-div").html($scope.Data.content);
    };

    Run();
});
