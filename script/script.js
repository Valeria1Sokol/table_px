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
