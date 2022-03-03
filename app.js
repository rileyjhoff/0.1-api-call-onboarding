// import functions
import { getPeople, getSpecies, getPlanets } from './fetch.js';

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

        const name = clone.querySelector('#one');
        const birth_year = clone.querySelector('#two');
        const mass = clone.querySelector('#three');
        
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

        const name = clone.querySelector('#one');
        const average_lifespan = clone.querySelector('#two');
        const classification = clone.querySelector('#three');
        
        name.textContent = 'Name: ' + species.name;
        average_lifespan.textContent = 'Average Lifespan: ' + species.average_lifespan;
        classification.textContent = 'Classification: ' + species.classification;

        list.appendChild(clone);
    }
}

async function loadPlanets() {
    const planetsIndex = await getPlanets();

    list.classList.add('planets');

    for (let planets of planetsIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const terrain = clone.querySelector('#two');
        const climate = clone.querySelector('#three');
        
        name.textContent = 'Name: ' + planets.name;
        terrain.textContent = 'Terrain: ' + planets.terrain;
        climate.textContent = 'Climate: ' + planets.climate;

        list.appendChild(clone);
    }
}

// set event listeners 

selectEl.addEventListener('change', async(e) => {
    const selected = e.target.value;

    if (selected === 'people') {
        list.innerHTML = '';
        await loadPeople();
    } else if (selected === 'species') {
        list.innerHTML = '';
        await loadSpecies();
    } else if (selected === 'planets') {
        list.innerHTML = '';
        await loadPlanets();
    }
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
