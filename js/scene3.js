
$(window).on('load', function () {
    setUpScene3();
});

function setUpScene3() {
    $("#userOrNpcName").css("text-shadow", "3px 1px 1px black");
    $('#userOrNpcName').text("zeca" + "(thinking):");

    var text = 'Hmmm.. It\'s quite late but I feel restless. Maybe I should go for a walk or... I don\'t know I could get some coffee.';
    $("#textBox").css("text-shadow", "3px 1px 1px black");
    $("#textBox").css("color", "white");

    animateText(text);

    document.querySelector('#coffeeBtn').addEventListener('click', coffe);
    document.querySelector('#deckBtn').addEventListener('click', deck);
    
}

function coffe() {
    window.location.href = "scene4.html";
}

function deck() {
    window.location.href = "scene5.html";
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