let progres = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progres.max = song.duration;
    progres.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progres.value = song.currentTime;
    },500)
}

progres.onchange = function(){
    song.play();
    song.currentTime = progres.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play")
}