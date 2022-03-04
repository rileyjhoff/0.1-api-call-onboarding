// function to fetch people data
export async function getPeople() {
    let url = 'https://swapi.dev/api/people';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

// function to fetch species data
export async function getSpecies() {
    let url = 'https://swapi.dev/api/species';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

// function to fetch planets data
export async function getPlanets() {
    let url = 'https://swapi.dev/api/planets';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

// function to fetch starships data
export async function getStarships() {
    let url = 'https://swapi.dev/api/starships';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

// function to fetch vehicles data
export async function getVehicles() {
    let url = 'https://swapi.dev/api/vehicles';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}