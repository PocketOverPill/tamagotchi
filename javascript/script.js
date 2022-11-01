let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

var canva = document.getElementById('canva');

function criar(){
    let pet = canva.getContext('2d');

    pet.fillStyle = 'red';

    pet.fillRect(120, 80,50,50);
}
a.addEventListener('click', criar);