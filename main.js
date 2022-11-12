function playSound(idAudioElement){
    document.querySelector(idAudioElement).play(); 
}

const keyArray = document.querySelectorAll('.tecla');



for(let i = 0; i < keyArray.length; i++){

   const key = keyArray[i];
   const instrument = key.classList[1];
   const idAudio = `#som_${instrument}`;

    //   console.log(idAudio);

    key.onclick = function(){
        playSound(idAudio);
    }
    // console.log(i);
}