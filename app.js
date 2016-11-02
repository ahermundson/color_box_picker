$(document).ready(function() {
var colorArray = ["yellow", "blue", "red", "orange", "pink",  "black", "purple", "green", "brown", "crimson", "maroon", "navy", "salmon", "teal", "violet", "orchid"];
shuffle(colorArray);
var target = colorArray[randomNumber(0, 6)];
$('.color-target').text(target);
blockMaker(colorArray);

//checking response. If correct, fade in correct message. If incorrect, shake element and display wrong.
$('.block-container').on('click', '.block-element', function(){
  $('.block-element').removeClass('animated shake');
  if ($(this).hasClass(target)) {
    $('.correct-response').fadeIn();
    $(this).css({'background-color': 'white'});
    $(this).find('.yes').slideDown();
    delay(this);
  } else {
    $(this).addClass('animated shake')
    $(this).find('.nope').fadeIn();
    $('.nope').fadeOut('slow');
  }
});

//Button to play again after succesful decision. Will clear the blocks. shuffle the array and redisplay
$('.button').on('click', function() {
  $('.correct-response').fadeOut();
  $('.block-element').remove();
  colorArray = shuffle(colorArray);
  blockMaker(colorArray);
  target = colorArray[randomNumber(0, 6)];
  $('.color-target').text(target);
});

function blockMaker(colorArray) {
  for (var i = 0; i < 7; i++) {
    $('.block-container').append('<div class=' + colorArray[i] + '><p class="nope">WRONG!</p><p class="yes">CORRECT!</p></div>');
    $('div:last').addClass('block-element');
    $('div:last').css({'background-color': colorArray[i]});
  }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function correctResponseColorChange(correctDiv) {
  $(correctDiv).css({'background-color': target})
  $(correctDiv).find('.yes').slideUp();
  console.log("test");
}

function delay(correctDiv) {
  window.setTimeout(correctResponseColorChange, 2000, correctDiv);
}
});

//Fisher Yates Shuffle to reorganize array before redisplaying board s
function shuffle(array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


function correctResponseColorChange() {
  $(this).css({'background-color': target})
  $(this).find('.yes').slideUp();
}

function delay() {
  window.setTimeout(correctResponseColorChange, 2000);
}
