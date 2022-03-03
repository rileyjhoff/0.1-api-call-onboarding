export async function getPeople() {
    let url = 'https://swapi.dev/api/people';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

// To Do: write species function