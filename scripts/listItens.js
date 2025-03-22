const inputItem = document.getElementById('input-item');
let contador = 0;
export function createListItens() {
    if (inputItem.value === '') {
        alert('Digite um item para adicionar à lista');
        return;
    }
    
    const listItem = document.createElement('li');
    const containerListItem = document.createElement('div');
    containerListItem.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    const itemName = document.createElement('p');
    itemName.textContent = inputItem.value;

    inputCheckbox.addEventListener('click', function() {
        if (inputCheckbox.checked) { // Se o checkbox estiver marcado vai riscar o texto
            itemName.style.textDecoration = 'line-through';
        } else {
            itemName.style.textDecoration = 'none';
        }
    });

    containerListItem.appendChild(inputCheckbox);
    containerListItem.appendChild(itemName);

    listItem.appendChild(containerListItem);

    const weekDay = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });

    const date = new Date().toLocaleDateString('pt-BR', {});
    const hour = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });
    const dateComplete = `${weekDay} ${date} às ${hour}`;
    const dateItem = document.createElement('p');
    dateItem.innerText = dateComplete;
    listItem.appendChild(dateItem);
    dateItem.classList.add('texto-data');

    return listItem;
}