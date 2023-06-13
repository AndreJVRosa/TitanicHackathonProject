var captain = "Captain Mark"
var user = false;

$(window).on('load', function () {
    setUpScene5();
});

function setUpScene5() {
    $('#userOrNpcName').text("Rose" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = "Zeca, thank you again for yesterday. I\'m going for a walk and I... would love for you to join me";

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').hide();

    $('#acceptBtn img').attr('src', 'resources/yesBtn.png');
    $('#denieBtn img').attr('src', 'resources/noBtn.png');

    document.querySelector('#acceptBtn').addEventListener('click', answerYes);
    document.querySelector('#denieBtn').addEventListener('click', answerNo)
}


function answerYes() {
    $('#userOrNpcName').text('Zeca' + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'Thanks for the lovely invitation, of course I\'ll join you for a walk';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').show();
    $('#acceptBtn').hide();
    $('#denieBtn').hide();

    document.querySelector('.nextBtn').addEventListener('click', yesOption);

}

function answerNo() {
    $('#userOrNpcName').text("Zeca" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = ' My appologies Rose, I would love to join you but I\'m rather busy. Maybe some other time';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').show();
    $('#acceptBtn').hide();
    $('#denieBtn').hide();
    document.querySelector('.nextBtn').addEventListener('click', noOption);
}

function yesOption() {
    window.location.href = 'underConstruction.html';
}

function noOption() {
    $('#userOrNpcName').text("Zeca" + '(thinking):');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'I don\'t feel like doing much today, should I stay in or should I go have a cup of coffee';

    animateText(text);

    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $('.nextBtn').hide(); 
   
    $('#acceptBtn').show();
    $('#denieBtn').show();
    $('#acceptBtn img').attr('src', 'resources/coffeeBtn.png');
    $('#denieBtn img').attr('src', 'resources/stayInBtn.png');
    document.querySelector('#acceptBtn').addEventListener('click', coffeeOption);
    document.querySelector('#denieBtn').addEventListener('click', stayOption)
}

function coffeeOption(){
    window.location.href = 'scene4.html';
}

function stayOption(){
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
