//    slider
const items = document.querySelectorAll('.slide');
const itemCount = items.length;
const nextItem = document.querySelector('.arrowNext');
const previousItem = document.querySelector('.arrowPrew');
let count = 0;
var num = document.querySelector('.num');
var a = 1;
var b = 10;
num.innerHTML = a + '-' + b + ' van de 100';

function showNextItem() {
    items[count].classList.remove('active');
    $('.next').removeClass('nextDefoult');
    $('.previous').removeClass('previousDefoult');
    if (count < itemCount - 1) {
        count++;
        a += 10;
        b += 10;
        num.innerHTML = a + '-' + b + ' van de 100';
    }
    if (count == itemCount - 1) {
        $('.next').addClass('nextDefoult');
    }

    items[count].classList.add('active');
    console.log(count);
}

function showPreviousItem() {
    items[count].classList.remove('active');
    $('.next').removeClass('nextDefoult');
    $('.previous').removeClass('previousDefoult');

    if (count > 0) {
        count--;
        a -= 10;
        b -= 10;
        num.innerHTML = a + '-' + b + ' van de 100';
    }
    if (count == 0) {
        $('.previous').addClass('previousDefoult');
    }

    items[count].classList.add('active');
    console.log(count);
}

function keyPress(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        showPreviousItem();
    } else if (e.keyCode == '39') {
        showNextItem();
    }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);