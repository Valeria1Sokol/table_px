$('.btn-toggle').click(function () {
    $(this).find('.btn').toggleClass('blueBtn');

    if ($(this).find('.btn-primary').length > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').length > 0) {
        $(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').length > 0) {
        $(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').length > 0) {
        $(this).find('.btn').toggleClass('btn-info');
    }

    $(this).find('.btn').toggleClass('whiteBtn');

});

$('form').submit(function () {
    var radioValue = $("input[name='options']:checked").val();
    if (radioValue) {
        alert("You selected - " + radioValue);
    };
    return false;
});


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

$('.hasSub').click(function () {
    $(' .fas').toggleClass("rotate");
    $(".subMenu").slideToggle(400);
    $(this).toggleClass("clickLi");
    $('.subMenu').toggleClass("open");
    $('.iconWhite').toggleClass("iconShow");
});

// When the user clicks on div, open the popup
//function notificationFunction() {
//    var popup = document.getElementById("myPopup");
//    popup.classList.toggle("show");
//}
//
//function userFunction() {
//    var popup = document.getElementById("myPopup2");
//    popup.classList.toggle("show");
//}
//
//function searchFunction() {
//    var popup = document.getElementById("myPopup3");
//    popup.classList.toggle("show");
//}
//
//function searchMobFunction() {
//    var popup = document.getElementById("myPopup4");
//    popup.classList.toggle("show");
//}
var modal1 = document.getElementById("closeAll");
 window.onclick = function (event) {
           if (event.target == modal1) {
               $('#menu__toggle').prop('checked', false);
           }
       } 
