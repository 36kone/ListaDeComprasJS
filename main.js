import { createListItens } from './scripts/createListItens.js';
import { checkEmptyList } from './scripts/checkEmptyList.js';
const buttonItem = document.getElementById('adicionar-item');

buttonItem.addEventListener('click', (event) => {

    event.preventDefault(); // Evita que o formulário seja enviado

    const listItem = createListItens();

    listaDeCompras.appendChild(listItem);

    checkEmptyList();

});

checkEmptyList();
