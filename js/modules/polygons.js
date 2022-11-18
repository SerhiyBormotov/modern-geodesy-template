function polygons(isIe, wHeight, wWidth) {
    if (document.getElementById('services-svg-1')) {

        let topEl = [],
            ticking = false,
            wScroll = window.scrollY;
        const serviceSVG = [
                document.querySelector('#services-svg-1 svg'),
                document.querySelector('#services-svg-2 svg'),
                document.querySelector('#services-svg-3 svg')
            ],
            hEl = serviceSVG[0].clientHeight;

        for (let i = 0; i <= 2; i++) {
            topEl[i] = serviceSVG[i].getBoundingClientRect().top + wScroll;
        }

        let rotateServiceSVG = function (scrollY) {
            let yEl = (scrollY - topEl[0] - (wHeight / 3) + (hEl)) / 1.1,

                rotEl = [40 * ((scrollY / topEl[0]) - 1),
                    60 * (1 - (scrollY / topEl[1]) - 1),
                    70 * ((scrollY / topEl[2]) - 1)
                ];

            for (let i = 0; i <= 2; i++) {
                if (!(serviceSVG[i].parentElement.classList.contains('active'))) {
                    if (i == 0) {
                        serviceSVG[i].style.cssText = `transform: rotateY(${rotEl[i]}deg) translateY(${yEl}px)`;
                    } else {
                        serviceSVG[i].style.cssText = `transform: rotateY(${rotEl[i]}deg)`;
                    }

                }
            }

        };

        let initServiceSVG = function (scrollY) {

            for (let i = 0; i <= 2; i++) {
                if ((scrollY + (wHeight / 3)) >= (topEl[i])) {

                    serviceSVG[i].parentElement.classList.add('active');
                    if (i == 0) {
                        serviceSVG[i].style.cssText = `transform: rotateY(0deg) translateY(0)`;
                    } else {
                        serviceSVG[i].style.cssText = `transform: rotateY(0deg)`;
                    }
                }
            }


        };

        if (wWidth > 765)  {
            if (!(isIe)) {
                serviceSVG.forEach((element) => {
                    element.classList.remove('active');
                });

            }

            rotateServiceSVG(wScroll);
            initServiceSVG(wScroll);

            document.addEventListener('scroll', function (event) {
                wScroll = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        rotateServiceSVG(wScroll);
                        initServiceSVG(wScroll);
                        ticking = false;
                    });

                    ticking = true;

                }
            });
        }
    }

}

export default polygons;