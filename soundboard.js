window.onload = function() {

    var snareButton = document.getElementById('snare-button')
    var tomButton = document.getElementById('tom-button')
    var cymbalButton = document.getElementById('cymbal-button')

    var snareAudio = new Audio('snare.wav')
    var tomAudio = new Audio('tom.wav')
    var cymbalAudio = new Audio('cymbals.wav')

    snareButton.addEventListener('click', function() {
        snareAudio.currentTime = 0
        snareAudio.play();
    })

    tomButton.addEventListener('click', function() {
        tomAudio.currentTime = 0
        tomAudio.play();
    })

    cymbalButton.addEventListener('click', function() {
        cymbalAudio.currentTime = 0
        cymbalAudio.play();
    })

};