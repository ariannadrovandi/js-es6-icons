/**
 * Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box 
per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà 
per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai 
vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona 
un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà 
"color" in modo dinamico: generare in modo casuale un codice colore, 
sapendo che la notazione esadecimale è formata dal simbolo "#" seguito 
da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente.
*/

// array icons
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

/* 
<div class="col-12 col-md-4 col-lg-2">
    <div class="card p-2 m-2 d-flex justify-content-center align-items-center ${color}" style="color: ${newcolor}">
        <div class="${prefix}${family} ${prefix}${name}"></div>
        <div class="">${name}</div>
    </div>
</div> 
*/

function cards(cardContent){
    const newcolor = colorRandom();
    let{name, prefix, family, color} = cardContent;
    color = newcolor;
    const tplCards = 
    `
    <div class="col-12 col-md-4 col-lg-2">
        <div class="card p-2 m-2 d-flex justify-content-center align-items-center ${color}" style="color: ${newcolor}">
            <div class="${prefix}${family} ${prefix}${name}"></div>
            <div class="">${name}</div>
        </div>
    </div>
    `;
    console.log(tplCards);
    return tplCards;
};

function colorRandom(){
    //variabile codice colore
    const characters= '1234567890ABCDEF';
    let codeHex = '#';

    //massimo di caratteri 
    const maxCharacters = 6;
    let i = 0;

    //genero un numero random
    while (i < maxCharacters ){
        let randomNum = getRndNumIncl(0, characters.length);
        codeHex +=
        `
        ${characters.charAt([randomNum])}
        `;
        i++
    };
    return codeHex;
};

/*
<option value="all" id="all">All</option>
<option value="animals" id="animal">Animals</option>
<option value="vegetables" id="vegetable">Vegetables</option>
<option value="users" id="user">Users</option>
*/

function createOption() {
    //Creo array con i type: 
    const types = [];
    for (let i = 0; i < icons.length; i++) {
        if (types.indexOf(icons[i].type) === -1){
        types.push(icons[i].type);}
    }
    types.unshift('all');
    // option
    let optTypes= '';
    for(let x = 0; x < types.length; x++){
    const optTemplate = 
    `
    <option value="${types[x]}">${types[x].toUpperCase()}</option>
    `;
    optTypes += 
    `
    ${optTemplate}
    `;
    };
    
    select.innerHTML = optTypes;
};

function printCards(obj){
    const row = document.querySelector('.row');
    let cardElements = '';
    for (let i = 0; i < obj.length; i++){
       card = createCards(obj[i]);
       cardElements += box;
    }
    row.innerHTML = cardElements;
};

function init(){
    createOption()
    printCards(obj)
    const select = document.getElementById('select');
    select.addEventListener('change', getValue);
};

init()



