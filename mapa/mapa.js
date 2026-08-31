// Parte de abrir o menu das regiões 
const menuRegioes = document.querySelector('.container-regiao');
const btnAtivo = document.querySelector('.regiao-ativo');

btnAtivo.addEventListener('click', ()=>{
    menuRegioes.classList.toggle('ativo');
});

// Parte de conseguir a localização do usuário

let h2 = document.querySelector('.longitude');



function succsess(pos){
console.log(pos.coords.latitude);
console.log(pos.coords.longitude);

h2.textContent = ` Latitude: ${pos.coords.latitude} / Longitude: ${pos.coords.longitude}`;


}
function error(err){
    console.log(err);
}


var watchID =  navigator.geolocation.watchPosition(succsess, error);
