let a
let b

function player() {
    if (document.querySelector('#music').files.length > 0) {
        readFile(document.querySelector('#music').files)
        const playButton = document.querySelector('.button')
        playButton.innerHTML = `<button class="Pause" onclick="stop()">Stop</button>`
    }
}

function stop() {
    window.location.reload();
}

function readFile(files) {
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(files[0]);
    fileReader.onload = function(e) {
        playAudioFile(e.target.result);
        const title = document.querySelector('.titles')
        title.innerHTML = `<h1> Playing :  ${files[0].name}  </h1>`
    }
}

function playAudioFile(file) {
    var context = new window.AudioContext();
    a = file;
    context.decodeAudioData(file, function(buffer) {
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = false;
        source.connect(context.destination);
        source.start(0); 
    });
    b = context
}
