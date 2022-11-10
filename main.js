function playSong(idAudioElement){
    document.querySelector(idAudioElement).play(); 
}

const keyArray = document.querySelectorAll('.tecla');

let i = 0;

while(i < keyArray.length){
    keyArray[i].onclick = function(){
        playSong('');
    }
    i++;
    console.log(i);
}