import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let fullSlider = document.querySelector('.tech-button-all');
let textButtonAll = fullSlider.textContent;
let slider = document.querySelector('.tech-list');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 700 && slider.dataset.mobile == "false") {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 10,
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



fullSlider.addEventListener('click', function () {
	let toggle = slider.classList.toggle('slider-full');
	console.log(fullSlider.textContent);
	if (toggle) {
		fullSlider.textContent = 'Скрыть всё';
		fullSlider.classList.add('tech-button-all-reverse');
		fullSlider.classList.remove('tech-button-all');
	}
	else {
		fullSlider.textContent = textButtonAll;
		fullSlider.classList.add('tech-button-all');
		fullSlider.classList.remove('tech-button-all-reverse');
	}
});


mobileSlider();

window.addEventListener('resize', function () {
	mobileSlider();
});



