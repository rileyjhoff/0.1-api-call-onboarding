// import functions
import { getPeople, getSpecies } from './fetch.js';

// console.log(getPeople);

// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');

// console.log(template, selectEl, list);

async function loadPeople() {
    const peopleIndex = await getPeople();

    list.classList.add('people');

    for (let people of peopleIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const birth_year = clone.querySelector('h6');
        const mass = clone.querySelector('h5');
        
        name.textContent = 'Name: ' + people.name;
        birth_year.textContent = 'Birth Year: ' + people.birth_year;
        mass.textContent = 'Weight: ' + people.mass;

        list.appendChild(clone);
    }
}

async function loadSpecies() {
    const speciesIndex = await getSpecies();

    list.classList.add('species');

    for (let species of speciesIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const average_lifespan = clone.querySelector('h6');
        const classification = clone.querySelector('h5');
        
        name.textContent = 'Name: ' + species.name;
        average_lifespan.textContent = 'Average Lifespan: ' + species.average_lifespan;
        classification.textContent = 'Classification: ' + species.classification;

        list.appendChild(clone);
    }
}

// set event listeners 

selectEl.addEventListener('change', async(e) => {
    const selected = e.target.value;

    if (selected === 'people') {
        list.classList.remove('species');
        list.innerHTML = '';
        await loadPeople();
    } else if (selected === 'species') {
        list.classList.remove('people');
        list.innerHTML = '';
        await loadSpecies();
    }
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
