console.log("Welcome to Musicaaalll");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProceedingbar =document.getElementById('myProceedingbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Savage Love" , filePath:"1.mp3",coverPth:"sl.jpg"},
    {songName:"Run BTS" , filePath:"2.mp3",coverPth:"rbi.jpg"},
    {songName:"Butter" , filePath:"3.mp3",coverPth:"bi.png"},
    {songName:"Stay With Me" , filePath:"4.mp3",coverPth:"swmi.jpg"},
    {songName:"Dreamers" , filePath:"5.mp3",coverPth:"di.jpg"},
]
songItem.forEach((element,i)=>{

element.getElementsByTagName("img")[0].src=songs[i].coverPth;
element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');  
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    

progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
myProceedingbar.value = progress;
})
myProceedingbar.addEventListener('change', ()=>{
    
    audioElement.currentTime =((myProceedingbar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause'); 
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
console.log(e.target);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src=`/${songIndex}.mp3`;
masterSongName.innerText=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})