$(document).ready(function () {
    
    var param = (window.location.search.split("?")[1]).split("=")[1];
    
    $('#h2Heading').text(param);
    
    bindData();

    function bindData() {
        $.ajax({
            url: "Data/DanceGallery.json",
            async: false,
            dataType: "json",
            success: function (data) {
                if (data != null) {

                    for (var i = 0; i < data.length; i++) {
                        $('#dvgallery').append(`<div class="swiper-slide">
                                <img src = "assets/img/gallery/${data[i].path}" alt="" >
                            </div >`);
                    }
                }
            },
            error: function (xhr, status, error) {
                console.log("Error retrieving data: " + error);
            }
        });
    };
});