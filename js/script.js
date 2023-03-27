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

// ------------------------- MILESTONE 1 & 2 -----------------------

// <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//     <div class="card">
//         <div class="card-body d-flex justify-content-center align-items-center py-4 fs-3" style="color: ${value.color}"> 
//             <i class="${value.prefix}${value.family} ${value.prefix}${value.name}"></i>
//             <span>${value.name}</span>
//         </div>
//     </div>
// </div>


// funzione che disegna il template delle card e lo ritorna 
function drawCard(icon){
    
    const template = 
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-body d-flex justify-content-center align-items-center py-4 fs-3" style="color: ${icon.color}"> 
                <i class="${icon.prefix}${icon.family} ${icon.prefix}${icon.name}"></i>
                <span>${icon.name}</span>
            </div>
        </div>
    </div>
    `;
    return template;
}

function drawPage(icons){
    const container = document.querySelector('.row');
    let html = ''; //creo una variabile dove vado a metter tpl per metterlo a display

    // ciclo forEach che mi crea nella pagina le card
    icons.forEach((icon)=> { 
        const tpl = drawCard(icon); //metto drawCaed dentro una variabile tpl per poi metterla a display
        //console.log(drawCard(icon));
        html += tpl;  //metto a display il drawCard
    });

    //console.log(html);

    //dopo aver creato tutte le icone le stampo a display
    container.innerHTML = html;
}




// ------------------------- MILESTONE 3 -----------------------

function filterIcons(){
    //array da filtrare
    console.log(this.value);

    // creo un nuovo array nel quale andranno solo le icon che hanno il type che soddisfa la scelta dell'opzione del select 
    let filteredArray = icons.filter((icon)=> this.value === 'alla' || icon.type === this.value); 

}

function populateOptions(select) {
    // <option value="animal" id="animal">Animal</option>
    let optionsValue = [];
    icons.forEach((icon)=> {
        if (!optionsValue.includes(icon.type)){
            optionsValue.push(icon.type);
            const newOption = document.createElement('option');
            newOption.value = icon.type;
            newOption.textContent = icon.type.charAt(0).toUpperCase() + icon.type.slice(1);
            select.appendChild(newOption);
        }
    });
    //console.log(optionsValue); 
}

//prendo select da html e gli metto l'evento change
function init(){
    const select = document.getElementById('type');
    populateOptions(select);
    select.addEventListener('change', filterIcons);
    drawPage(icons); //gli dico che la prima volta mi deve far vedere la drawPage con l'array originale 
}
init()
