$(document).ready(function () {

    const moreExb = [
        {
            "title": "Exhibitions of B/W photographs of Indian Theatre's various presentations organised by leading theatre group 'DARPAN' of Lucknow",
            "date": "September 1982",
            "location": "Lucknow",
        },
        {
            "title": "Exhibition of Theatre Photographs on occasion of National Drama Festival by Cultural Department U.P.",
            "date": "1985",
            "location": "Lucknow",
        },
        {
            "title": "Exhibition of occasion of State Drama Festival by State Cultural Department",
            "date": "1986",
            "location": "Dehradun",
        },
        {
            "title": "Exhibition on Occasion of \"National Kathak Festival\" in ISKON Auditorium",
            "date": "May 1999",
            "location": "Juhu Mumbai",
        },
    ]

    bindData();

    function bindSLider(sliderId, imageData) {

        if (imageData.length > 0) {

            if (imageData.length < 2) {
                $(`#homeSlider${sliderId}`).parent().addClass("no_loop_slider").removeClass("slides-1")
            }

            for (var i = 0; i < imageData.length; i++) {
                $(`#homeSlider${sliderId}`).append(`<div class="swiper-slide">
                        <img src = "assets/img/exh/${imageData[i].path}" alt="" >
                    </div >`);
            }
        }
    };

    function bindData() {
        $.ajax({
            url: "Data/expData.json",
            async: false,
            dataType: "json",
            success: function (data) {
                if (data != null) {

                    for (var i = 0; i < data.length; i++) {
                        $('#exb_cards').append(`<div class="col-md-6 col-lg-6 mb-4" data-aos="fade" data-aos-delay="0">
                            <div class="card mb-0 h-100">
                                <div class="card-body d-flex flex-column p-0">
                                    <section class="gallery-single exb_slider hide_pagination hide_nav">
                                        <div class="position-relative h-100">
                                            <div class="slides-1 portfolio-details-slider swiper">
                                                <div class="swiper-wrapper align-items-center" id="homeSlider${i + 1}">
                                                </div>
                                                <div class="swiper-pagination"></div>
                                            </div>
                                            <div class="swiper-button-prev"></div>
                                            <div class="swiper-button-next"></div>
                                        </div>
                                    </section>
                
                                    <div class="p-3">
                                        <p class="text flex-grow-1 mb-3">
                                            ${data[i].title}
                                        </p>

                                        <div class="d-flex flex-column align-items-end justify-content-end text-right">
                                            <p class="mb-0">${data[i].date}</p>
                                            <p class="mb-0">${data[i].location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`);

                        bindSLider(data[i].id, data[i].images)
                    }

                }
            },
            error: function (xhr, status, error) {
                console.log("Error retrieving data: " + error);
            }
        });
    };

    // append more exb here
    if (moreExb.length > 0) {
        for (var i = 0; i < moreExb.length; i++) {
            $(`#data_card_append`).append(`<div class="col-md-6 col-lg-6 mb-4">
                <div class="card mb-0 h-100">
                <div class="card-body d-flex flex-column">
                    <p class="mb-4 text-justify flex-grow-1">
                        ${moreExb[i].title}
                    </p>

                    <div class="d-flex flex-column align-items-end justify-content-end text-right">
                        <p class="mb-0">${moreExb[i].date}</p>
                        <p class="mb-0">${moreExb[i].location}</p>
                    </div>
                </div>
                </div>
            </div>`);
        }
    }
});