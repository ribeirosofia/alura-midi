function playSound(AudioSelector){
   const element =  document.querySelector(AudioSelector);
   
    if(element != null && element.localName === 'audio'){ 
       element.play();     
   }else{
        console.log('Elemento não encontrado');
   }
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

        if(event.code === 'Space' || event.code === 'Enter' ){
            key.classList.add('ativa');
        }      
    }

    key.onkeyup = function(){
      key.classList.remove('ativa');
    }
}
