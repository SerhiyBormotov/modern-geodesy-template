function carousel(wWidth) {
    //PUBLICATIONS
	const publItems = document.querySelectorAll('.publ-item'),
    publItemsDots = document.querySelectorAll('.publ-dots>span'),
    publItemsArrow = document.querySelector('.publ-arrow');

if ((wWidth > 480) && (publItems.length > 0)) {

    showPubl(1);
    let pubInterval = setInterval(showNextPubl, 3000);
    for (let i = 0; i < publItemsDots.length; i++) {
        publItemsDots[i].addEventListener('click', (event) => {
            clearInterval(pubInterval);
            if (!(event.currentTarget.classList.contains('active'))) {
                showPubl(i + 1);
            }
        });
    }

    publItemsArrow.addEventListener('click', (event) => {
        clearInterval(pubInterval);
        showNextPubl();
    });

}

function showPubl(num) {

    if (!(publItems[num - 1].classList.contains('active'))) {

        publItems.forEach((item) => {
            if (item.classList.contains('pre1')) {
                item.classList.remove('pre1');
            } else if (item.classList.contains('pre')) {
                item.classList.remove('pre');
                item.classList.add('pre1');
            } else if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.classList.add('pre');
            }
        });

        publItems[num - 1].classList.add('active');
        publItems[num - 1].classList.remove('pre1');
        publItemsDots.forEach(item => item.classList.remove('active'));
        publItemsDots[num - 1].classList.add('active');

    }
}

function showNextPubl() {
    let activePubl = 0;

    for (let i = 0; i < publItems.length; i++) {
        if (publItems[i].classList.contains('active')) {
            activePubl = i;
            activePubl++;
        }
    }
    if (activePubl >= publItems.length) {
        activePubl = 0;
    }
    showPubl(activePubl + 1);
}
}

export default carousel;