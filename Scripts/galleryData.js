$(document).ready(function () {
    
    var param = (window.location.search.split("?")[1]).split("=")[1];

    var paramLowerCase = param.toLowerCase()
    var paramUpperCase = param.charAt(0).toUpperCase() + param.slice(1);

    $('#gallery_title').text(paramUpperCase);
    
    if(param === "folk") {
        $('#gallery_title').text("Folk dances and Folk theatre");
    }

    if(param === "dance") {
        $('#gallery_title').text("Different dances");
    }

    // console.log(paramUpperCase, "paramUpperCase")

    bindData(param);

    $('.gallery_btns').append(`
        <a class="${param == "dance" ? "active" : ''}" href='gallery.html?cat=dance'>Dance</a>
        <a class="${param == "folk" ? "active" : ''}" href='gallery.html?cat=folk'>Folk</a>
        <a class="${param == "music" ? "active" : ''}" href='gallery.html?cat=music'>Music</a>
        <a class="${param == "instrumental" ? "active" : ''}" href='gallery.html?cat=instrumental'>Instrumental</a>
        <a class="${param == "theatre" ? "active" : ''}" href='gallery.html?cat=theatre'>Theatre</a>
        <a class="${param == "vocals" ? "active" : ''}" href='gallery.html?cat=vocals'>Vocals</a>
    `)

    function bindData(dataType) {
        $.ajax({
            url: `Data/${dataType}Gallery.json`,
            dataType: "json",
            success: function (data) {

                console.log(data.length)

                $(".photo_count").text(data.length);

                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        $('#galleryWrap').append(`<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="gallery-item h-100">
                                <img src="assets/img/gallery/${paramLowerCase}/${data[i].path}" class="img-fluid" alt="">
                                <div class="gallery-links d-flex align-items-center justify-content-center">
                                    <a href="assets/img/gallery/${paramLowerCase}/${data[i].path}" title="${data[i].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
                                    <i class="bi bi-arrows-angle-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>`)
                    }
                }
            },
            error: function (xhr, status, error) {
                console.log("Error retrieving data: " + error);
            }
        });
    };
});