var captain = "Captain Mark"
var user = false;

$(window).on('load', function () {
    setUpScene3();
});

function setUpScene3() {
    $('#userOrNpcName').text("zeca" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

    var text = "Hello I'm Zeca, who might you be?";
    

    animateText(text);

    

    $('.nextBtn').show();
    $('.optionBtn').hide();

    document.querySelector('.nextBtn').addEventListener('click', nextToTalk);
}

function nextToTalk() {
    $('#userOrNpcName').text(captain + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

    var text = 'I\'m Mark, Captain of the Ship';
    
    animateText(text);

    
    document.querySelector('.nextBtn').removeEventListener('click', nextToTalk);
    document.querySelector('.nextBtn').addEventListener('click', userTallk);

}

function userTallk() {
    $('#userOrNpcName').text("Zeca" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

    var text = 'Pleasure Mark, you seem like you could use a drink. What you say? Its on me';
    
    animateText(text);

   
    document.querySelector('.nextBtn').removeEventListener('click', userTallk);
    document.querySelector('.nextBtn').addEventListener('click', captainTalk);
}

function captainTalk() {
    $('#userOrNpcName').text(captain + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");

    var text = 'Sure, why not!';
    
    animateText(text);

    document.querySelector('.nextBtn').removeEventListener('click', captainTalk);
    document.querySelector('.nextBtn').addEventListener('click', narratorTalk);
}

function narratorTalk() {
    $('#userOrNpcName').css("color", "red")
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    $('#userOrNpcName').text('Narrator' + ':');
    var text = 'Mark and Zeca have a couple of drinks and talk for a while. They realize that they have a lot in commun and develop a strong bond that is real because we had only 24 hours to make this';
    
    animateText(text);

    document.querySelector('.nextBtn').removeEventListener('click', narratorTalk);
    document.querySelector('.nextBtn').addEventListener('click', captainTalk2);
}

function captainTalk2() {
    $('#userOrNpcName').css("color", "blue")
    $('#userOrNpcName').text(captain + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'Zeca my brother, if it\'s you maybe you can help me. What i do?';
    
    animateText(text);

    document.querySelector('.nextBtn').removeEventListener('click', captainTalk2);
    document.querySelector('.nextBtn').addEventListener('click', zecaTalk);
}

function zecaTalk() {
    $('#userOrNpcName').text("Zeca" + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'What is it Mark? You can tell me everything...';
    
    animateText(text);

    document.querySelector('.nextBtn').removeEventListener('click', zecaTalk);
    document.querySelector('.nextBtn').addEventListener('click', lastTalk);
}

function lastTalk() {

    $('#userOrNpcName').text(captain + ':');
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    var text = 'I got offered money to fasten the ship to our destination. It could be dangerous though. What should i do?';
    
    animateText(text);

    $('.nextBtn').hide();
    $('.optionBtn').show();

    document.querySelector('#acceptBtn').addEventListener('click', acceptOption);
    document.querySelector('#denieBtn').addEventListener('click', denieOption)
}

function acceptOption() {
    window.location.href = "final1.html";
}

function denieOption() {
    window.location.href = "final2.html";
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
