'use strict';
import "core-js/stable";
import aboutUs from './modules/aboutus';
import polygons from './modules/polygons';
import carousel from './modules/carousel';

let wScroll = window.scrollY,
	wHeight = window.innerHeight,
	wWidth = window.innerWidth;


//CHECK BROWSER
const isIe = (window.navigator.userAgent.search(/Trident/) > 0);

window.addEventListener("DOMContentLoaded", function () {
	polygons(isIe, wHeight, wWidth);
	aboutUs(isIe, wHeight);
	carousel(wWidth);

	//MODAL	
	if (wWidth < 550) {
		document.querySelector(".header-phone").classList.remove("show-modal");
	}

	const showModalElements = document.querySelectorAll('.show-modal'),
		modal = document.querySelector('.modal'),
		closeModal = document.querySelector('.modal-x div');

	showModalElements.forEach((element) => {
		element.addEventListener("click", () => {
			modal.classList.add('toggle');
		});
	});

	closeModal.addEventListener('click', () => {
		modal.classList.remove('toggle');
	});


	//HEADER
	const header = document.querySelector('header');
	document.addEventListener('scroll', () => {
		wScroll = window.scrollY;
		if (wScroll > 0) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});

	//BLOCKQUOTES
	const qtElements = document.querySelectorAll('.qt');
	qtElements.forEach((element) => {
		element.insertAdjacentHTML('beforeend', '<div class="qt-border"><span></span><span></span><span></span></div>');
	});

	//DIVIDER
	const indexDivider = document.querySelector('.index-divider'),
		indexDividerLine = document.querySelector('.index-divider-line');
	if (indexDivider) {
		const indexDividerTop = indexDivider.getBoundingClientRect().top + wScroll;
		if (wScroll < indexDividerTop) {

			document.addEventListener('scroll', function scrollDividerListener() {
				if ((wScroll + (wHeight / 2) >= indexDividerTop) && !(indexDividerLine.classList.contains('toggle'))) {
					indexDividerLine.classList.add('toggle');

					window.scrollTo({
						top: (indexDividerTop + 100),
						behavior: "smooth"
					});
					document.removeEventListener('scroll', scrollDividerListener);
				}
			});
		} else if (wScroll >= indexDividerTop) {
			indexDividerLine.classList.add('toggle');
		}
	}

	//MOUSEWHEEL
	const indexMouseWheel = document.querySelector('.index-mouse-wheel');

	if (indexMouseWheel) {

		indexMouseWheel.addEventListener('click', () => {
			window.scrollTo({
				top: wHeight,
				behavior: "smooth"
			});
		});
	}



	//MENU
	const topNavButton = document.querySelector('.top-nav-button'),
		topNav = document.querySelector('nav'),
		overlayMain = document.querySelector('.overlay-main'),
		serviceNav = document.querySelector('.service-nav'),
		serviceNavClose = document.querySelector('.service-nav-x div');

	topNavButton.addEventListener('click', function () {
		this.classList.toggle('toggle');
		topNav.classList.toggle('toggle');
		overlayMain.classList.toggle('toggle');
	});



	//SERVICE-NAV

	function showAside() {
		topNavButton.classList.remove('toggle');
		topNav.classList.remove('toggle');
		overlayMain.classList.remove('toggle');
		serviceNav.classList.add('toggle');
		document.classList.add('hide');
	}

	const showAsideElements = document.querySelectorAll('.show-aside');

	showAsideElements.forEach(element => element.addEventListener('click', showAside));
	serviceNavClose.addEventListener('click', () => {
		serviceNav.classList.remove('toggle');
		document.classList.remove('hide');
	});
});