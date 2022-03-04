// import functions from fetch.js
import { getPeople, getSpecies, getPlanets, getStarships, getVehicles } from './fetch.js';


// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');


// write functions to render data on page
// function to render people data
async function loadPeople() {
    const peopleIndex = await getPeople();

    list.classList.add('people');

    for (let people of peopleIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const birth_year = clone.querySelector('#two');
        const height = clone.querySelector('#three');
        const mass = clone.querySelector('#four');
        
        name.textContent = people.name;
        birth_year.textContent = 'Birth Year: ' + people.birth_year;
        height.textContent = 'Height: ' + people.height + 'cm';        
        mass.textContent = 'Weight: ' + people.mass + 'kg';

        list.appendChild(clone);
    }
}

// function to render species data
async function loadSpecies() {
    const speciesIndex = await getSpecies();

    list.classList.add('species');

    for (let species of speciesIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const classification = clone.querySelector('#two');
        const language = clone.querySelector('#three');
        const average_height = clone.querySelector('#four');
        const average_lifespan = clone.querySelector('#five');
        
        name.textContent = species.name;
        classification.textContent = 'Classification: ' + species.classification;
        language.textContent = 'Language: ' + species.language;
        average_height.textContent = 'Average Height: ' + species.average_height;
        average_lifespan.textContent = 'Average Lifespan: ' + species.average_lifespan;

        list.appendChild(clone);
    }
}

// function to render planets data
async function loadPlanets() {
    const planetsIndex = await getPlanets();

    list.classList.add('planets');

    for (let planets of planetsIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const population = clone.querySelector('#two');
        const terrain = clone.querySelector('#three');
        const climate = clone.querySelector('#four');
        const gravity = clone.querySelector('#five');
        const diameter = clone.querySelector('#six');
        const rotation_period = clone.querySelector('#seven');
        const orbital_period = clone.querySelector('#eight');
        
        name.textContent = planets.name;
        population.textContent = 'Population: ' + planets.population;
        terrain.textContent = 'Terrain: ' + planets.terrain;
        climate.textContent = 'Climate: ' + planets.climate;
        gravity.textContent = 'Gravity: ' + planets.gravity;
        diameter.textContent = 'Diameter: ' + planets.diameter;
        rotation_period.textContent = 'Rotation Period: ' + planets.rotation_period;
        orbital_period.textContent = 'Orbital Period: ' + planets.orbital_period;

        list.appendChild(clone);
    }
}
// function to render starships data
async function loadStarships() {
    const starshipsIndex = await getStarships();

    list.classList.add('starships');

    for (let starships of starshipsIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const manufacturer = clone.querySelector('#two');
        const cost_in_credits = clone.querySelector('#three');
        const length = clone.querySelector('#four');
        const crew = clone.querySelector('#five');
        const passengers = clone.querySelector('#six');
        const cargo_capacity = clone.querySelector('#seven');
        const consumables = clone.querySelector('#eight');
        const MGLT = clone.querySelector('#nine');
        const hyperdrive_rating = clone.querySelector('#ten');
        const max_atmosphering_speed = clone.querySelector('#eleven');
        
        name.textContent = starships.name;
        manufacturer.textContent = 'Manufacturer: ' + starships.manufacturer;
        cost_in_credits.textContent = 'Cost: ' + starships.cost_in_credits + ' credits';
        length.textContent = 'Length: ' + starships.length + ' meters';
        crew.textContent = 'Crew: ' + starships.crew;
        passengers.textContent = 'Passengers: ' + starships.passengers;
        cargo_capacity.textContent = 'Cargo Capacity: ' + starships.cargo_capacity;
        consumables.textContent = 'Consumables: ' + starships.consumables;
        hyperdrive_rating.textContent = 'Hyperdrive Rating: ' + starships.hyperdrive_rating;
        MGLT.textContent = 'Megalight per hour: ' + starships.MGLT;
        max_atmosphering_speed.textContent = 'Max Atmosphering Speed: ' + starships.max_atmosphering_speed;

        list.appendChild(clone);
    }
}

// function to render vehicles data
async function loadVehicles() {
    const vehiclesIndex = await getVehicles();

    list.classList.add('vehicles');

    for (let vehicles of vehiclesIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const manufacturer = clone.querySelector('#two');
        const cost_in_credits = clone.querySelector('#three');
        const length = clone.querySelector('#four');
        const crew = clone.querySelector('#five');
        const passengers = clone.querySelector('#six');
        const cargo_capacity = clone.querySelector('#seven');
        const consumables = clone.querySelector('#eight');
        const max_atmosphering_speed = clone.querySelector('#eleven');
        
        name.textContent = vehicles.name;
        manufacturer.textContent = 'Manufacturer: ' + vehicles.manufacturer;
        cost_in_credits.textContent = 'Cost: ' + vehicles.cost_in_credits + ' credits';
        length.textContent = 'Length: ' + vehicles.length + ' meters';
        crew.textContent = 'Crew: ' + vehicles.crew;
        passengers.textContent = 'Passengers: ' + vehicles.passengers;
        cargo_capacity.textContent = 'Cargo Capacity: ' + vehicles.cargo_capacity;
        consumables.textContent = 'Consumables: ' + vehicles.consumables;
        max_atmosphering_speed.textContent = 'Max Atmosphering Speed: ' + vehicles.max_atmosphering_speed;

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
    } else if (selected === 'starships') {
        list.innerHTML = '';
        await loadStarships();
    } else if (selected === 'vehicles') {
        list.innerHTML = '';
        await loadVehicles();
    }
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
