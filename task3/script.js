const green = document.querySelector('.trafficLight-green');
const yellow = document.querySelector('.trafficLight-yellow');
const red = document.querySelector('.trafficLight-red');
const traffic = document.querySelector('.trafficLight');
const trafficLightClick = document.querySelector('#click-button');
const trafficLightAuto = document.querySelector('#auto-button');

let autoMode = false;
let currentColor = null;

function setColorGreen() {
    green.style.backgroundColor = 'green';
}

function setColorYellow() {
    yellow.style.backgroundColor = 'yellow';
}

function setColorRed() {
    red.style.backgroundColor = 'red';
}

function setColorBlack() {
    green.style.backgroundColor = 'black';
    yellow.style.backgroundColor = 'black';
    red.style.backgroundColor = 'black';
}

function toggleColor() {
    if (currentColor == 'green') {
        setColorBlack();
        setColorYellow();
        currentColor = 'yellow';
    } else if (currentColor == 'yellow') {
        setColorBlack();
        setColorRed();
        currentColor = 'red';
    } else {
        setColorBlack();
        setColorGreen();
        currentColor = 'green';
    }
}

function enableColorOnClick() {
    traffic.addEventListener('click', toggleColor);
    autoMode = false;
}

function autoColorToggle() {
    if (autoMode) {
        toggleColor();
        setTimeout(autoColorToggle, 1000);
    }
}

function enableColorAuto() {
    autoMode = !autoMode;
    autoColorToggle();
    traffic.removeEventListener('click', toggleColor);
}

trafficLightAuto.addEventListener('click', enableColorAuto);

trafficLightClick.addEventListener('click', enableColorOnClick);