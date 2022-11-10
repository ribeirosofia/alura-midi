function playPom(){
    document.querySelector('#som_tecla_pom').play(); 
}

const keyArray = document.querySelectorAll('.tecla');
keyArray[0].onclick = playPom;

let i = 0;

while(i < keyArray.length){
    keyArray[i].onclick = playPom;
    i++;
    console.log(i);
}