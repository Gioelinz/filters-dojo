const label = document.querySelector('label');
const filters = document.querySelector('.filters');

function previewImage() {
    const file = document.getElementById('my-file').files[0];
    const img = document.getElementById('img');
    var reader = new FileReader();

    reader.onloadend = function () {
        img.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
        label.classList.remove('file-btn')
        img.setAttribute('width', 480)
        img.setAttribute('height', 320)
    } else {
        img.src = "";
    }
    filters.classList.remove('d-none');
    toggler();
}



const clickable = document.querySelectorAll('.clickable');
const inputs = document.querySelectorAll('.inputs');

function toggler() {
    for (let i = 0; i < clickable.length; i++) {
        const e = clickable[i];

        e.onclick = function () {
            inputs[i].classList.toggle('display')
        }


    }
}


const grayscale = document.getElementById('grayscale');
const saturate = document.getElementById('saturate');
const sepia = document.getElementById('sepia');
const invert = document.getElementById('invert');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const blur = document.getElementById('blur');
const hueRotate = document.getElementById('hue-rotate');


function setValue(e, filter) {
    const img = document.getElementById('img');
    if (filter == 'blur') {
        img.style.filter = `${filter}(${e}px)`;
    }
    if (filter == 'hue-rotate') {
        img.style.filter = `${filter}(${e}deg)`;
    }
    img.style.filter = `${filter}(${e}%)`;
}


grayscale.onchange = function (e) {
    setValue(e.target.value, 'grayscale');
}
saturate.onchange = function (e) {
    setValue(e.target.value, 'saturate');
}
sepia.onchange = function (e) {
    setValue(e.target.value, 'sepia');
}
invert.onchange = function (e) {
    setValue(e.target.value, 'invert');
}
contrast.onchange = function (e) {
    setValue(e.target.value, 'contrast');
}
brightness.onchange = function (e) {
    setValue(e.target.value, 'brightness');
}
blur.onchange = function (e) {
    setValue(e.target.value, 'blur');
}
hueRotate.onchange = function (e) {
    setValue(e.target.value, 'hue-rotate');
}