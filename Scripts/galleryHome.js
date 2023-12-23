$(document).ready(function () {
    $.ajax({
        url: `Data/HomeGallery.json`,
        dataType: "json",
        success: function (data) {
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    $('.append_gallery').append(`<div id="gallery" class="gallery mb-5">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="mb-0">${data[i].title}</h5>
                                <a href='gallery.html?cat=${data[i].data.toLowerCase()}'>View all</a>
                            </div>
                            <div class="row gy-4">
                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="gallery-item h-100">
                                        <img src="assets/img/gallery/${data[i].images[0].path}" class="img-fluid" alt="">
                                        <div class="gallery-links d-flex align-items-center justify-content-center">
                                            <a href="assets/img/gallery/${data[i].images[0].path}" title="${data[i].images[0].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
                                            <i class="bi bi-arrows-angle-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="gallery-item h-100">
                                        <img src="assets/img/gallery/${data[i].images[1].path}" class="img-fluid" alt="">
                                        <div class="gallery-links d-flex align-items-center justify-content-center">
                                            <a href="assets/img/gallery/${data[i].images[1].path}" title="${data[i].images[1].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
                                            <i class="bi bi-arrows-angle-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="gallery-item h-100">
                                        <img src="assets/img/gallery/${data[i].images[2].path}" class="img-fluid" alt="">
                                        <div class="gallery-links d-flex align-items-center justify-content-center">
                                            <a href="assets/img/gallery/${data[i].images[2].path}" title="${data[i].images[2].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
                                            <i class="bi bi-arrows-angle-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
                                    <div class="gallery-item h-100">
                                        <img src="assets/img/gallery/${data[i].images[3].path}" class="img-fluid" alt="">
                                        <div class="gallery-links d-flex align-items-center justify-content-center">
                                            <a href="assets/img/gallery/${data[i].images[3].path}" title="${data[i].images[3].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
                                            <i class="bi bi-arrows-angle-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
});