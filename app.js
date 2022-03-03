// import functions
import { getPeople } from './fetch.js';

// console.log(getPeople);

// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');

// console.log(template, selectEl, list);

async function loadPeople() {
    const people = await getPeople();

    list.classList.add('individuals');

    for (let individuals of people) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const birth_year = clone.querySelector('h6');
        const mass = clone.querySelector('h5');
        
        name.textContent = 'Name: ' + individuals.name;
        birth_year.textContent = 'Birth Year: ' + individuals.birth_year;
        mass.textContent = 'Weight: ' + individuals.mass;

        list.appendChild(clone);
    }
}

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
