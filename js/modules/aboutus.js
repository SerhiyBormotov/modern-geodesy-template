function aboutUs(isIe, wHeight){

    const aboutus = document.querySelector('.aboutus');	

	function aboutusAddClass(num) {
		for (let i = 0; i <= 5; i++) {
			aboutus.classList.remove('block' + i);
		}
		aboutus.classList.add('block' + num);
	}

	function aboutusSVGAnimation(from, to) {
		if (!(isIe)) {
			document.getElementById("poly1_" + from + "_" + to).beginElement();
			document.getElementById("poly2_" + from + "_" + to).beginElement();
			document.getElementById("poly3_" + from + "_" + to).beginElement();
		}
	}

	function aboutusHasClass(num) {
		return aboutus.classList.contains('block' + num);
	}

	if (aboutus) {

    //NUMBERS
        let max1 = 0,
		    max2 = 0;
		const number1 = document.getElementById('number1'),
			number2 = document.getElementById('number2');

		max1 = +number1.innerText;
		max2 = +number2.innerText;
		number1.innerText = '0';
		number2.innerText = '0';
    
    //LOGO ANIMATION

		const aboutusLogoItems = document.querySelectorAll('.aboutus-block2-item');
		let logoHoverInterval;

		aboutusLogoItems.forEach(function (element) {
			element.addEventListener('mouseenter', function () {

				aboutusLogoItems.forEach(element => element.classList.remove('hover'));
				this.classList.add('hover');
				clearTimeout(logoHoverInterval);
			});

			element.addEventListener('mouseleave', function () {
				logoHoverInterval = setTimeout(function () {
					element.classList.remove('hover');
				}, 200);
			});
		});
    
    // UP AND DOWN BUTTONS

		document.querySelector('.aboutus-block5-arrow').addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
    
		document.querySelector('.aboutus-block0-down').addEventListener('click', () => {
			window.scrollTo({
				top: 1
			});
		});


        // SCROLL ANIMATION
        
		let blk1Scroll = document.querySelector('.aboutus-block1').getBoundingClientRect().top + window.scrollY - wHeight,
			blk2Scroll = document.querySelector('.aboutus-block2').getBoundingClientRect().top + window.scrollY - wHeight - 100,
			blk3Scroll = document.querySelector('.aboutus-block3').getBoundingClientRect().top + window.scrollY - wHeight - 150,
			blk4Scroll = document.querySelector('.aboutus-block4').getBoundingClientRect().top + window.scrollY - wHeight - 250,
			blk5Scroll = document.querySelector('.aboutus-block5').getBoundingClientRect().top + window.scrollY - wHeight * 1.5;


		let aboutusMain = function () {
           let wScroll = window.scrollY;

			if (wScroll == 0) {
				aboutusAddClass(0);
				aboutusSVGAnimation(1, 0);
			} else if ((wScroll > 0) && (wScroll <= blk1Scroll) && (!(aboutusHasClass(1)))) {
				aboutusAddClass(1);
				aboutusSVGAnimation(0, 1);
			} else if ((wScroll > blk2Scroll) && (wScroll <= blk3Scroll) && (!(aboutusHasClass(2)))) {
				aboutusAddClass(2);
				aboutusSVGAnimation(1, 2);
			} else if ((wScroll > blk1Scroll) && (wScroll <= blk2Scroll) && (!(aboutusHasClass(1)))) {
				aboutusAddClass(1);
				aboutusSVGAnimation(2, 1);
			} else if ((wScroll > blk3Scroll) && (wScroll <= blk4Scroll) && (!(aboutusHasClass(3)))) {
				if (aboutusHasClass(2)) {
					aboutusSVGAnimation(2, 3);
				} else {
					aboutusSVGAnimation(4, 3);
				}

				aboutusAddClass(3);

			} else if ((wScroll > blk2Scroll) && (wScroll <= blk3Scroll) && (!(aboutusHasClass(2)))) {
				aboutusAddClass(2);
				aboutusSVGAnimation(3, 2);
			} else if ((wScroll > blk4Scroll) && (wScroll <= blk5Scroll) && (!(aboutusHasClass(4)))) {
				if (number1.innerText == '0') {
					document.querySelectorAll('.aboutus-block4-num').forEach(element => element.classList.add('active'));
					let numi = 0,
						numj = 0;
					let intervalNum = setInterval(function () {
						numi += 6;
						numj += 48;
						if (numi <= max1) {
							number1.innerText = numi;
						}
						if (numj <= max2) {
							number2.innerText = numj;
						}
						if ((numi >= max1) && (numj >= max2)) {
							clearInterval(intervalNum);
						}
					}, 20);
				}

					if (aboutusHasClass(3)) {
						aboutusSVGAnimation(3, 4);
					} else {
						aboutusSVGAnimation(5, 4);
					}

				aboutusAddClass(4);

			} else if ((wScroll > blk5Scroll) && (!(aboutusHasClass(5)))) {
				aboutusAddClass(5);
				aboutusSVGAnimation(4, 5);
			}
		};


		aboutusMain();
		document.addEventListener('scroll', aboutusMain);
	}
}

export default aboutUs;