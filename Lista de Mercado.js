let listaDeMercado = [];

function adicionar() {
    
    const addItem = prompt('Digite um item para adicionar na lista');
    
    listaDeMercado.push(addItem);

    menu();
}

function remover() {
    
    const removeItem = prompt('Digite um item para remover da lista');

    const listaFiltrada = listaDeMercado.filter(item => item !== removeItem);

    listaDeMercado = listaFiltrada;

    menu();
}

function editar() {

    const editItem = prompt('Digite um item para editar');

    const nomeEditItem = prompt('Digite o novo nome do item a ser editado');

    const listaEditada = listaDeMercado.map((item) => {
        if(item === editItem) {
            return nomeEditItem;
        } else {
            return item;
        };
    });

    listaDeMercado = listaEditada;

    menu();
}

function listar() {
    console.log(listaDeMercado);

    menu();
}

function menu() {
    const promptMenu = prompt('1.Adicionar 2.Remover 3.Editar 4.Listar 5.Sair')

    switch (promptMenu) {
        case "1":
            adicionar();
            break;
        case "2":
            remover();
            break;
        case "3":
            editar();
            break;
        case "4":
            listar();
            break;
        case "5":
            return;
        default:
            menu();
            break;
    }
};

menu();