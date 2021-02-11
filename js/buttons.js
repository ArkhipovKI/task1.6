import '../scss/style.scss'
let buttonBurger = document.querySelector('.header__button-burger');
let menuContainer = document.querySelector('.full-container__menu');
let slideMenuCrossButton = document.querySelector('.header-slide-menu__icon-cross-btn');
let blurBlock = document.querySelector('.friendly-fire-block');

let requestButton = document.querySelector('.button-request');
let requestButtonFullView = menuContainer.querySelector('.button-request');
let requestContainer = document.querySelector('.full-container__request');
let closeButton = requestContainer.querySelector('.button-icon-cross');
let wrapperMenu = document.querySelector('.wrapper-menu');

let checkstatusButton = document.querySelector('.button-call');
let checkstatusButtonSideMenu = menuContainer.querySelector('.button-call');
let checkstatusContainer = document.querySelector('.full-container__request-call');
let checkstatusCrossButton = checkstatusContainer.querySelector('.button-icon-cross');
let checkstatusWrapperMenu = checkstatusContainer.querySelector('.wrapper-menu');

let mainContainer = document.querySelector('.full-container__main');


function openRequest() {
	requestContainer.classList.remove('hidden');
	requestContainer.classList.remove('request-hidden');
	if (window.innerWidth > 700) {
		closeButton.classList.add('hidden');
		let newCrossRequest = document.createElement("button");
		newCrossRequest.classList.add('button');
		newCrossRequest.classList.add('button-icon-cross');
		wrapperMenu.appendChild(newCrossRequest);
	}
	else {
		closeButton.classList.remove('hidden');
	}
}

function closeRequest() {
	requestContainer.classList.add('hidden');
	requestContainer.classList.add('request-hidden');
}

requestButtonFullView.addEventListener('click', openRequest);
requestButton.addEventListener('click', openRequest);
wrapperMenu.addEventListener('click', closeRequest);
closeButton.addEventListener('click', closeRequest);


function openBurger() {
	menuContainer.classList.remove('hidden');
	document.body.style.position = 'fixed';
	document.body.style.top = `-${window.scrollY}px`;
}

function closeBurger() {
	menuContainer.classList.add('hidden');
	document.body.style.position = '';
	document.body.style.top = '';
}

buttonBurger.addEventListener('click', openBurger);
blurBlock.addEventListener('click', closeBurger);
slideMenuCrossButton.addEventListener('click', closeBurger);


function openRequestCall() {
	checkstatusContainer.classList.remove('hidden');
	checkstatusContainer.classList.remove('request-hidden');
	if (window.innerWidth > 700) {
		checkstatusCrossButton.classList.add('hidden');
		let newCrossCall = document.createElement("button");
		newCrossCall.classList.add('button');
		newCrossCall.classList.add('button-icon-cross');
		checkstatusWrapperMenu.appendChild(newCrossCall);
	}
	else {
		checkstatusCrossButton.classList.remove('hidden');
	}
}

function closeRequestCall() {
	checkstatusContainer.classList.add('hidden');
	checkstatusContainer.classList.add('request-hidden');
}

checkstatusButtonSideMenu.addEventListener('click', openRequestCall);
checkstatusButton.addEventListener('click', openRequestCall);
checkstatusWrapperMenu.addEventListener('click', closeRequestCall);
checkstatusCrossButton.addEventListener('click', closeRequestCall);

/*

function ToggleBurger () {
	if (window.innerWidth < 701) {
		requestButton.addEventListener('click', function() {
			requestContainer.classList.toggle('hidden');
			requestContainer.classList.toggle('request-hidden');
			if (requestContainer.classList.contains('hidden') == false) {
				slideMenu.classList.remove('slide-menu');
			}
		});
		buttonBurger.addEventListener('click', function() {
			menuContainer.classList.toggle('hidden');
			if (menuContainer.classList.contains('hidden') == false) {
				slideMenu.classList.remove('slide-menu');
			}
			closeButton.addEventListener('click', function(event) {
				if (event.target) {
				menuContainer.classList.add('hidden');
				}
				if (menuContainer.classList.contains('hidden') == true) {
				blurBlock.classList.remove('friendly-fire-blur');
				}
				});
		});
	}
	if (window.innerWidth >= 701 && window.innerWidth <=1120) {

		requestButton.addEventListener('click', function() {
			requestContainer.classList.toggle('hidden');
			requestContainer.classList.toggle('request-hidden');
			if (requestContainer.classList.contains('hidden') == false) {
				wrapperMenu.addEventListener('click', function(event) {
					if (event.target) {
						requestContainer.classList.add('hidden');
						requestContainer.classList.add('request-hidden');
					}
				});
				closeButton.addEventListener('click', function(event) {
					if (event.target) {
						requestContainer.classList.add('hidden');
						requestContainer.classList.add('request-hidden');
					}
				});
			}

		});

		buttonBurger.addEventListener('click', function() {
			menuContainer.classList.remove('hidden');

			if (menuContainer.classList.contains('hidden') == false) {
				blurBlock.classList.add('friendly-fire-blur');
			}

			blurBlock.addEventListener('click', function(event) {
				if (event.target) {
				menuContainer.classList.add('hidden');

				}
				if (menuContainer.classList.contains('hidden') == true) {
				blurBlock.classList.remove('friendly-fire-blur');
				}
			});

			closeButton.addEventListener('click', function(event) {
				if (event.target) {
				menuContainer.classList.add('hidden');
				}
				if (menuContainer.classList.contains('hidden') == true) {
				blurBlock.classList.remove('friendly-fire-blur');
				}
				});
		});
	}

		requestButtonFullView.addEventListener('click', function() {
			requestContainer.classList.toggle('hidden');
			requestContainer.classList.toggle('request-hidden');
			if (requestContainer.classList.contains('request-hidden') == false) {
				wrapperMenu.addEventListener('click', function(event) {
					if (event.target) {
						requestContainer.classList.add('hidden');
						requestContainer.classList.add('request-hidden');
					}
				});

			}
		});

}

ToggleBurger();*/




