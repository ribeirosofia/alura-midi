function playSound(idAudioElement){
    document.querySelector(idAudioElement).play(); 
}

const keyArray = document.querySelectorAll('.tecla');

let i = 0;

while(i < keyArray.length){

   const key = keyArray[i];
   const instrument = key.classList[1];
   const idAudio = `#som_${instrument}`;

    //   console.log(idAudio);

    key.onclick = function(){
        playSound(idAudio);
    }
    i++;
    // console.log(i);
}