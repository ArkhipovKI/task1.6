import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let fullSlider = document.querySelector('.button-all');
let textButtonAll = fullSlider.textContent;
let ReadMore = document.querySelector('.main-block__button-overflow');
let textButtonReadMore = ReadMore.textContent;
let slider = document.querySelector('.companies-list');
let mySwiper;

let readMoreButon = document.querySelector('.main-block__button-overflow');
let readMoreContainer = document.querySelector('.main-block__text-overflow');

function toggleReadMore() {
	let toggle = readMoreContainer.classList.toggle('main-block__text-overflow');
	readMoreContainer.classList.toggle('main-block__text-overflow-full');

	if (!toggle) {
		console.log()
		ReadMore.textContent = 'Скрыть всё';
		readMoreButon.classList.remove('main-block__button-overflow');
		readMoreButon.classList.add('main-block__button-overflow-full');
	}
	else {
		ReadMore.textContent = textButtonReadMore;
		readMoreButon.classList.add('main-block__button-overflow');
		readMoreButon.classList.remove('main-block__button-overflow-full');
	}
}

readMoreButon.addEventListener('click', toggleReadMore);


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

mobileSlider();

window.addEventListener('resize', function () {
	mobileSlider();
});

fullSlider.addEventListener('click', function () {
	let toggle = slider.classList.toggle('slider-full');
	if (toggle) {
		fullSlider.textContent = 'Скрыть всё';
		fullSlider.classList.add('button-all-reverse');
		fullSlider.classList.remove('button-all');
	}
	else {
		fullSlider.textContent = textButtonAll;
		fullSlider.classList.add('button-all');
		fullSlider.classList.remove('button-all-reverse');
	}
});







