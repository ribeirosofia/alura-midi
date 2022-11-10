function playPom(){
    document.querySelector('#som_tecla_pom').play(); 
}

const keyArray = document.querySelectorAll('.tecla');
keyArray[0].onclick = playPom;