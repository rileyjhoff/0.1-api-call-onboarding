export async function getPeople() {
    let url = 'https://swapi.dev/api/people';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

export async function getSpecies() {
    let url = 'https://swapi.dev/api/species';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

export async function getPlanets() {
    let url = 'https://swapi.dev/api/planets';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

export async function getStarships() {
    let url = 'https://swapi.dev/api/starships';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

export async function getVehicles() {
    let url = 'https://swapi.dev/api/vehicles';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}