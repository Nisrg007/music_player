console.log("welcome to Sangeet");

let songIndex=0;
let audioElement = new Audio('music-and_covers/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=document.getElementsByClassName('songItemPlay');
//songs ka array
let songs = [
        { songName: "Ed sheeran - Perfect", filePath: "music-and_covers/1.mp3", coverpath: "music-and_covers/cover1.jpg"},
        { songName: "Friend", filePath: "music-and_covers/2.mp3", coverpath: "music-and_covers/cover2.jpg" },
        { songName: "Bear and Bear Friends - GLOW", filePath: "music-and_covers/3.mp3", coverpath: "music-and_covers/cover3.jpg" },
        { songName: "Alone", filePath: "music-and_covers/4.mp3", coverpath: "music-and_covers/cover4.jpg" },
        { songName: "Savage Love", filePath: "music-and_covers/5.mp3", coverpath: "music-and_covers/cover5.jpg" }
]
//to give or change this elements in html file using javascript
songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath; //coz img is a tag name
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName; //coz songName is a class name
});

//play/pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//Listen Events
audioElement.addEventListener('timeupdate',()=>{
//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100) //percentage of audio time
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
}
)}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src=`music-and_covers/${songIndex+1}.mp3`; //` `for $and index inverted cpmma will be changed ` `
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        // audioElement.pause()=audioElement.currentTime;

    })
})




document.getElementById('next').addEventListener('click',()=>{
if (songIndex>=5) {
    songIndex=0;
} else {
    
    songIndex+=1;
}
audioElement.src=`music-and_covers/${songIndex}.mp3`; //` `for $and index inverted cpmma will be changed ` `
masterSongName.innerText=songs[songIndex-1].songName;
audioElement.currentTime=0;

audioElement.play();
gif.style.opacity=1;

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
if (songIndex<=0) {
    songIndex=0;
} else {
    
    songIndex-=1;
}
audioElement.src=`music-and_covers/${songIndex}.mp3`; //` `for $and index inverted cpmma will be changed ` `
masterSongName.innerText=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');


})