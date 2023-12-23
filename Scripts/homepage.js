$(document).ready(function () {
    

    bindData();
    
    // function bindData() {
    //     $.ajax({
    //         url: "Data/HomePagePhotos.json",
    //         dataType: "json",
    //         success: function (data) {
    //             if (data != null) {

    //                 for (var i = 0; i < data.length; i++) {
    //                     $('#dvPhotos').append('<div class="col-xl-3 col-lg-4 col-md-6">' +
    //                         '<div class="gallery-item h-100">' +
    //                         '<img src="' + data[i].path + '" class="img-fluid" alt="">' +
    //                         '<div class="gallery-links d-flex align-items-center justify-content-center">' +
    //                         '<a href="' + data[i].path + '" title="' + data[i].caption +'" class="glightbox preview-link" data-lightbox="gallery"><i class="bi bi-arrows-angle-expand"></i></a>' +
    //                         '<a href="gallery.html" class="details-link"><i class="bi bi-link-45deg"></i></a>' +
    //                         '</div>' +
    //                         '</div>' +
    //                         '</div>');
    //                 }
    //             }
    //         },
    //         error: function (xhr, status, error) {
    //             console.log("Error retrieving data: " + error);
    //         }
    //     });
    // };
    

    function bindData() {
        $.ajax({
            url: "Data/HomePagePhotos.json",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        // $('#dvPhotos').append(`<div class="col-sm-6 col-lg-4 col-xl-3">
                        //     <a href="${data[i].path}" title="${data[i].caption}" class="glightbox preview-link" data-lightbox="gallery">
                        //         <div class="gallery-links align-items-center justify-content-center">    
                        //             <i class="bi bi-arrows-angle-expand"></i>
                        //         </div>
                        //         <div class="gallery-item h-100">
                        //             <img src="${data[i].path}" class="img-fluid" alt="">
                        //         </div>
                        //     </a>
                        // </div>`)

                        // $('#dvPhotos').append(`<div class="col-sm-6 col-lg-4 col-xl-3">
                        //     <div class="gallery-item h-100">
                        //         <img src="${data[i].path}" class="img-fluid" alt="">
                        //         <div class="gallery-links d-flex align-items-center justify-content-center">
                        //             <a href="${data[i].path}" title="${data[i].caption}" class="glightbox preview-link" data-lightbox="gallery"><i
                        //                     class="bi bi-arrows-angle-expand"></i></a>
                        //             <a href="gallery.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        //         </div>
                        //     </div>
                        // </div>`)

                        $('#dvPhotos').append(`<div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="gallery-item h-100">
                                <img src="assets/img/gallery/${data[i].path}" class="img-fluid" alt="">
                                <div class="gallery-links d-flex align-items-center justify-content-center">
                                    <a href="assets/img/gallery/${data[i].path}" title="${data[i].caption}" class="glightbox preview-link m-0 w-100 h-100 d-flex justify-content-center align-items-center" data-lightbox="gallery" >
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