$(document).ready(function () {
    
    bindData();

    function bindData() {
        $.ajax({
            url: "Data/HomePagePhotos.json",
            async: false,
            dataType: "json",
            success: function (data) {
                if (data != null) {

                    for (var i = 0; i < data.length; i++) {
                        $('#homeSlider').append(`<div class="swiper-slide">
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