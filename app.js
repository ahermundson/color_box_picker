$(document).ready(function() {
var colorArray = ["yellow", "blue", "red", "orange", "pink", "beige", "black"];
var target = colorArray[randomNumber(0, 6)];
$('.color-target').text(target);
blockMaker(colorArray);


$('.block-container').on('click', '.block-element', function(){
  $('.block-element').removeClass('animated shake');
  if ($(this).hasClass(target)) {
    console.log("correct");
  } else {
    $(this).addClass('animated shake')
    $(this).find('.nope').text("WRONG!");
    $('.nope').fadeOut('slow');
  }
});

function blockMaker(colorArray) {
  for (var i = 0; i < colorArray.length; i++) {
    $('.block-container').append('<div class=' + colorArray[i] + '><p class="nope"></p></div>');
    $('div:last').addClass('block-element');
    $('div:last').css({'background-color': colorArray[i]});
  }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

});
