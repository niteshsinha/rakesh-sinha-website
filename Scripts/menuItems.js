$(document).ready(function () {
    var menuItems = ["Dances", "Instrumental", "Theatre", "Vocals", "MIscellaneous"]

    BindList();

    function BindList() {
        var $list = $("#ulGallery");
        $.each(menuItems, function (index, value) {
            var $li = $("<li><a href='gallery.html?cat=" + value + "'>" + value + "</a></li>");
            $list.append($li);
        });
    };
});