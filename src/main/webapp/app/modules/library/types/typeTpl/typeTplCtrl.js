angular.module('typeTplModule').controller('typeTplCtrl', function ($scope, typeTplSrvc) {

    $scope.Data = {
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
            "                Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>" +
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

    $scope.Func = {
        onScroll: function () {
            let navbar = document.getElementById("type-navigation-bar");
            let sticky = navbar.offsetTop + 192;
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        },
        onPageSelect: function (page) {
            $scope.Data.page = page;
            typeTplSrvc.getData(page);
        }
    };

    let Run = function () {
        window.onscroll = function () {
            $scope.Func.onScroll()
        };
        $scope.Func.onPageSelect("introduction");
    };

    Run();
});
