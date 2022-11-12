function playSound(idAudioElement){
    document.querySelector(idAudioElement).play(); 
}

const keyArray = document.querySelectorAll('.tecla');



for(let i = 0; i < keyArray.length; i++){

   const key = keyArray[i];
   const instrument = key.classList[1];
   const idAudio = `#som_${instrument}`; //template string

    key.onclick = function(){
        playSound(idAudio);
    }
    key.onkeydown = function(event){

        if(event.code === 'Space'){
            key.classList.add('ativa');
        } 
         
    }

    key.onkeyup = function(){
      key.classList.remove('ativa');
    }
}
