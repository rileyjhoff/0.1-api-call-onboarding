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

// To Do: write species function