const image = document.getElementById("image");
currentImageNumber = 1;
maxImageNumber = getMaxImageNumber();

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener('click', () => {
    if (currentImageNumber == 1) {
        currentImageNumber = maxImageNumber;
    } else {
        currentImageNumber--;
    }

    animation('right');
    setTimeout(refreshImage, 500);
})

nextButton.addEventListener('click', () => {
    if (currentImageNumber == maxImageNumber) {
        currentImageNumber = 1;
    } else {
        currentImageNumber++;
    }

    animation('left');
    setTimeout(refreshImage, 500);
})


function animation(direction) {
    let sign = '';
    let antiSign = '-';
    if (direction == 'left') {
        sign = '-';
        antiSign = '';
    }

    image.animate([
        { transform: 'translateX(0px)', offset: 0},
        { transform: 'translateX(' + sign + '100%)', offset: 0.45},
        { opacity: 0.5, offset: 0.45},
        { opacity: 0, offset: 0.48},
        { opacity: 0, offset: 0.52},
        { opacity: 0.5, offset: 0.55},
        // { transform: 'translateY(100%)', offset: 0.48},
        // { transform: 'translateY(0)', offset: 0.52},
        { transform: 'translateX(' + antiSign + '100%)', offset: 0.55},
        { transform: 'translateX(0px)', offset: 1}
    ], {
        duration: 1000,
        easing: 'ease-in-out'
    })   
}

function refreshImage() {
    image.style.setProperty("background", "url('images/image\ " + currentImageNumber + ".jpg') center no-repeat");
    image.style.setProperty("background-size", "cover");
}

function getMaxImageNumber() {
    return 15;
}
