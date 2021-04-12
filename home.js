var myAudio=document.getElementById("myAudio");
var audioBtn=document.querySelector("div a");
var isPlaying=false;
function playStop(){
    if(isPlaying==false)
    {
        isPlaying=true;
        myAudio.play();
        audioBtn.innerHTML=("<img src='music-notes.png' alt='audio'>");
    }
    else{
        isPlaying=false;
        myAudio.pause();
        audioBtn.innerHTML=("<img src='music-notes-off.png' alt='audio'>");
    }
}

