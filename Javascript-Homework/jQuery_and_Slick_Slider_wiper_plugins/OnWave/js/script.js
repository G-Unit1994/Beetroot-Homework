$(".hero-slider").slick({
	autoplay: true,
	infinite: true,
	arrows: false,
	dots: true,
	dotsClass: "my-dots",
	// speed: 3500,
	autoplaySpeed: 5500,
	initialSlide: 1,
	lazyLoad: "ondemand",
	draggable: true,
	swipe: true,
});

$(".arrivals-slider__list").slick({
	autoplay: true,
	arrows: true,
	slidesToShow: 4.99,
	prevArrow: $(".arrivals-slider__prev"),
	nextArrow: $(".arrivals-slider__next"),
});

$.getJSON("./json/arrivals.json", function (data) {
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

		$(".arrivals-slider__list").slick("slickAdd", sliderItem);
	});
});

$(document).ready(function(){
    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.partners-slider__prev'),
        nextArrow: $('.partners-slider__next'),
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});