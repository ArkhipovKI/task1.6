import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let slider = document.querySelector('.price-list');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 700 && slider.dataset.mobile == "false") {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 10,
			initialSlide: 3,
			loop: true,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
		slider.dataset.mobile = "true";
		console.log(slider.dataset.mobile);
	}

	if (window.innerWidth > 700) {
		slider.dataset.mobile = "false";
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', function () {
	mobileSlider();
});

