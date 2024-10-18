
let directions = [
    'to top',
    'to top right',
    'to right',
    'to bottom right',
    'to bottom',
    'to bottom left',
    'to left',
    'to top left'
];

let index = 0;

const gradientBox = document.getElementById('gradientBox');

const switchButton = document.getElementById('switchButton');

const switchGradient = () => {
    gradientBox.style.background = `linear-gradient(${directions[index]}, red, blue)`;

    index = (index + 1) % directions.length;
};

switchButton.addEventListener('click', switchGradient);
