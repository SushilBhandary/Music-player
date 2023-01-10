



// const plays = () => {
//     console.log("hi");
//     let song = document.querySelector('#music')
//     console.log(song.value);
    
//     let player = document.querySelector('#player')
//     player.innerHTML = `
//     <audio controls>
//     <source src="${song.value}" >
//     </audio>`
    

// }

function player() {
    readFile(document.querySelector('#music').files)
}

function readFile(files) {
    console.log('files');
    console.log(files);
    var fileReader = new FileReader();
        fileReader.readAsArrayBuffer(files[0]);
        fileReader.onload = function(e) {
            console.log('e.target.result');
            playAudioFile(e.target.result);
            console.log(e.target.result);
            console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
        }
}
function playAudioFile(file) {
    var context = new window.AudioContext();
        context.decodeAudioData(file, function(buffer) {
            var source = context.createBufferSource();
                source.buffer = buffer;
                source.loop = false;
                source.connect(context.destination);
                source.start(0); 
        });
}