var userName = '';
var npcName = 'Cleark';

$(document).ready(function () {
  setUpScene1();
})


function setUpScene1() {
  $('.nextBtn').hide();
  $('#ticket1').hide();
  $('#ticket2').hide();
  $('#userOrNpcName').text(npcName + ':');
  $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

  var text = 'Hello! What\'s your name?';

  animateText(text);

  $("#textBox").css("text-shadow", "3px 1px 1px black");
  introduction();
}


function introduction() {
  $('#submit-btn').click(function () {

    userName = $('#nameForm').val();
    console.log(userName);


    $('#userOrNpcName').text(userName + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

    var text = 'My name is ' + userName + '.\n' +
      'I would like to buy a ticket to New York.';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('#nameForm').hide();
    $('#submit-btn').hide();
    $('.nextBtn').show();

  });

  document.querySelector('.nextBtn').addEventListener('click', nextScene);
}



function nextScene() {

  $('#userOrNpcName').text(npcName);
  $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

  var text = 'Oh goodie! You are in luck!' +
    ' We still have tickets for the Titanic.' +
    ' Of course if can\'t afford them you can always go in the S. Francisco, it\'s cheaper';
  $("#textBox").css("text-shadow", "3px 1px 1px black");

  animateText(text);

  $('.nextBtn').hide();
  $('#ticket1').show();
  $('#ticket2').show();

  document.querySelector('#ticket1').addEventListener('click', choiceScene1Good);
  document.querySelector('#ticket2').addEventListener('click', choiceScene2);

}

function choiceScene1Good() {
  window.location.href = "scene1Good.html";
}

function choiceScene2() {
  window.location.href = "animationPage2.html";
}

function animateText(text) {
  // clear the text box
  $('#textBox').text('');
  // animate the text box
  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      $('#textBox').append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, 20);
}
