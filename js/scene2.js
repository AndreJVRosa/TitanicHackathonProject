

$(window).on('load', function () {
    setUpScene2();
});

function setUpScene2() {
    $('#userOrNpcName').text('Cleark' + ':');

    var text = 'You must choose one of these cabins.';
    animateText(text);

    $('.nextBtn').show();
    $('.options').hide();
    
    document.querySelector('.nextBtn').addEventListener('click', think);
}

function think() {
    $('#userOrNpcName').text("Zeca" + ' thinking:');
    var text = 'The right one is close to the cabin belonging to that beautiful lady. Rose, I think that\'s her name. Maybe I should pick that one.';
    animateText(text);

    $('.nextBtn').hide();
    $('.options').show();
    
    document.querySelector('#door1Btn').addEventListener('click', door);
    document.querySelector('#door2Btn').addEventListener('click', door);
}

function door() {
    window.location.href = "scene3.html";
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
