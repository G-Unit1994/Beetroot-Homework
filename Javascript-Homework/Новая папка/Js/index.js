$(document).ready(function(){
    console.log("Document is ready");

    // Initialize the hero slick slider
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

    console.log("Hero slider initialized");

    // Initialize the arrivals slick slider
    $('.arrivals__slider-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.arrivals__slider-prev'),
        nextArrow: $('.arrivals__slider-next')
    });

    console.log("Arrivals slider initialized");

    // Load the JSON data
    $.getJSON("json/guitar.json", function (data) {
        console.log("Data loaded:", data);

        if (data && data.length) {
            data.forEach((slide) => {
                let isInStock = slide.inStock ? "in stock" : "sold";
                let sliderItem = `
                    <li class="arrivals-slider__item">
                        <span class="arrivals-slider__label" data-stock="${isInStock}">${isInStock}</span>
                        <img data-lazy="${slide.img}" class="arrivals-slider__img" src="${slide.img}" alt="guitar">
                        <h3 class="arrivals-slider__title">${slide.name}</h3>
                        <p class="arrivals-slider__price">${slide.price}</p>
                    </li>
                `;

                // Add each slide to the slick slider
                $('.arrivals__slider-list').slick('slickAdd', sliderItem);
                console.log("Slide added:", sliderItem);
            });
        } else {
            console.error("No data found or data format is incorrect.");
        }
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Request Failed: " + err);
    });
});