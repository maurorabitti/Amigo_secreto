// Challenge Amigo Secreto
let amigos = [];
let amigo = "";
let amigoSecreto = 0;


//FUNCIONES
function agregarAmigo(){
//Obtiene el valor del elemento
    amigo = document.getElementById('amigo').value;

//Valida el dato ingresado
    if(!amigo){
        alert('Por favor, inserte un nombre.');
        console.log(amigo);
        return;
    }
    
//Ingresa el valor dentro del array
    amigos.push(amigo);

//Reestablece el campo del texto
    document.getElementById('amigo').value = "";

//Actualiza la lista de amigos
    agregarLista(amigos);
    console.log(amigos);
}
function agregarLista(valores){

// Selecciona la lista <ul> y la borra por completo
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < valores.length; i++) {
    
// Crea el <li>
        const nuevoElemento = document.createElement('li');

// Le pone el texto
        nuevoElemento.innerHTML = valores[i];

// Lo agrega a la lista
        lista.appendChild(nuevoElemento); 
    }
}
function sortearAmigo(){

//Valida si hay amigos en el array
    if(amigos.length < 1){
        alert('Ingresa los amigos para hacer el sorteo!');
        return;
    }

//Realiza el sorteo
    amigoSecreto = Math.floor(Math.random() * amigos.length)

// Selecciona la lista <ul> y la borra por completo
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

// Selecciona la lista <ul> resultado
    const resultado = document.getElementById('resultado');

// Crea el <li>
    const nuevoElemento = document.createElement('li');

// Muestra el resultado
    nuevoElemento.innerHTML = `Tu amigo secreto es ${amigos[amigoSecreto]}`;

// Lo agrega a la lista
    resultado.appendChild(nuevoElemento); 
}
