var captain = "Captain Mark"
var user = false;

$(window).on('load', function () {
    setUpScene5();
});

function setUpScene5() {
    $('#userOrNpcName').text("zeca" + '(thinking):');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = "Oh my God, that's Rose. Looks like she wants to jump. What should I do?";
    
    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').hide();

    $('#acceptBtn img').attr('src', 'resources/saveBtn.png');
    $('#denieBtn img').attr('src', 'resources/pushBtn.png');

    document.querySelector('#acceptBtn').addEventListener('click', nextToTalk);
    document.querySelector('#denieBtn').addEventListener('click', pushEnding)
}


function pushEnding() {
    $('#userOrNpcName').text('Zeca' + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'Now I\'m the one who doesn\'t have space for you in the door. Muahahahahahah!!!';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').show();
    $('#acceptBtn').hide();
    $('#denieBtn').hide();

    document.querySelector('.nextBtn').removeEventListener('click', pushEnding);
    document.querySelector('.nextBtn').addEventListener('click', pushOption);

}

function nextToTalk() {
    $('#userOrNpcName').text("Zeca" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = ' Don\'t do it Rose... I don\'t know what has brought this on, but please know that you are impoortant (*Sad music plays*). YOU MATTER. And I\'m here for you. I may be just a stanger but I can listen. So please grab my hand, I won\'t let you go!';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').show();
    $('#acceptBtn').hide();
    $('#denieBtn').hide();
    document.querySelector('.nextBtn').removeEventListener('click', nextToTalk);
    document.querySelector('.nextBtn').addEventListener('click', saveOption);
}

function saveOption() {
    window.location.href = 'scene6.html';
}

function pushOption() {
    window.location.href = 'underConstruction.html';
}
function animateText(text) {
    // clear the text box
    $('#textBox').text('');
    $("#textBox").css("text-shadow", "3px 1px 1px black");
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