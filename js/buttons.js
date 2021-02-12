import '../scss/style.scss'
let buttonBurger = document.querySelector('.header__button-burger');
let menuContainer = document.querySelector('.full-container__menu');
let slideMenuCrossButton = document.querySelector('.header-slide-menu__icon-cross-btn');
let blurBlock = document.querySelector('.free-area');

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

let body = document.body;

function openRequest() {
	requestContainer.classList.remove('container-request--hidden');
	if (window.innerWidth > 700) {
		closeButton.classList.add('button--hidden');
		let newCrossRequest = document.createElement("button");
		newCrossRequest.classList.add('button');
		newCrossRequest.classList.add('button-icon-cross');
		wrapperMenu.appendChild(newCrossRequest);
		body.setAttribute('style', "overflow-y:hidden");
	}
	else {
		closeButton.classList.remove('hidden');
	}
}

function closeRequest() {
	requestContainer.classList.add('hidden');
	requestContainer.classList.add('container-request--hidden');
	if (menuContainer.classList.contains('full-container__menu--hidden')) {
	body.removeAttribute('style', "overflow-y:hidden");
	}
}

requestButtonFullView.addEventListener('click', openRequest);
requestButton.addEventListener('click', openRequest);
wrapperMenu.addEventListener('click', closeRequest);
closeButton.addEventListener('click', closeRequest);


function openBurger() {
	menuContainer.classList.remove('full-container__menu--hidden');
	document.body.style.position = 'fixed';
	document.body.style.top = `-${window.scrollY}px`;
	body.setAttribute('style', "overflow-y:hidden");
}

function closeBurger() {
	menuContainer.classList.add('full-container__menu--hidden');
	document.body.style.position = '';
	document.body.style.top = '';
	if (body.hasAttribute('style')) {
	body.removeAttribute('style', "overflow-y:hidden");
	}
}

buttonBurger.addEventListener('click', openBurger);
blurBlock.addEventListener('click', closeBurger);
slideMenuCrossButton.addEventListener('click', closeBurger);


function openRequestCall() {
	checkstatusContainer.classList.remove('full-container__request-call--hidden');
	if (window.innerWidth > 700) {
		checkstatusCrossButton.classList.add('button--hidden');
		let newCrossCall = document.createElement("button");
		newCrossCall.classList.add('button');
		newCrossCall.classList.add('button-icon-cross');
		checkstatusWrapperMenu.appendChild(newCrossCall);
		body.setAttribute('style', "overflow-y:hidden");
	}
	else {
		checkstatusCrossButton.classList.remove('hidden');
	}
}

function closeRequestCall() {
	checkstatusContainer.classList.add('full-container__request-call--hidden');
	if (menuContainer.classList.contains('full-container__menu--hidden')) {
	body.removeAttribute('style', "overflow-y:hidden");
	}
}

checkstatusButtonSideMenu.addEventListener('click', openRequestCall);
checkstatusButton.addEventListener('click', openRequestCall);
checkstatusWrapperMenu.addEventListener('click', closeRequestCall);
checkstatusCrossButton.addEventListener('click', closeRequestCall);





