//boa pratica para uma melhor semantica. Reporta erros que sem esse modo stric ativo, passariam em branco. Melhora o desempenho do código ja que evita que "gambiarras" passem.
'use strict'; 


const images = [
    {'id': '1', 'url': './images/marvel.jpg'},
    {'id': '2', 'url': './images/team.jpg'},
    {'id': '3', 'url': './images/gaviao.jpg'},
    {'id': '4', 'url': './images/natasha.jpg'},
    {'id': '5', 'url': './images/thor.jpg'},
    {'id': '6', 'url': './images/tony.jpg'},
    {'id': '7', 'url': './images/hulk.jpg'},
    {'id': '8', 'url': './images/lixo.jpg'},
]

const containerItems = document.querySelector('#container-items');

//innerHTML adiciona código ao HTML sem precisar escrever la;
//usando template string (``) ao inves de aspas normais para poder usar variaveis(${variavel aqui}) dentro dessa parte do código 
const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);



//variavel que captura as imagens com a classe item, ou seja, todas as imagens carregadas.
let items = document.querySelectorAll('.item');


const previous = () => {
    const lastItem = items[items.length - 1]; //pega o tamanho da lista -1
    containerItems.insertBefore(lastItem, items[0]); //insertBefore faz basicamente o contrario do appendchild

    items = document.querySelectorAll('.item');
}

const next = () => {
    containerItems.appendChild(items[0]); //appendChild envia o item 0, que seria a primeira imagem na lista, para o final dela.

    items = document.querySelectorAll('.item'); //atualiza a lista com a nova posição do item feito acima.
}


//ativando as funções dos botões
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);