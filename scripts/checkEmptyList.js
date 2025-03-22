const listaDeCompras = document.getElementById('lista-de-compras');
const emptyList = document.querySelector('.mensagem-lista-vazia');

export function checkEmptyList(){

    const listItems = listaDeCompras.querySelectorAll('li');

    if(listItems.length === 0){
        emptyList.style.display = 'block';
    } else {
        emptyList.style.display = 'none';
    }
}

checkEmptyList();