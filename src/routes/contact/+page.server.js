export async function load({ fetch }) {
    const response = await fetch(
        "https://fdnd-agency.directus.app/items/hull_people?filter[id][_in]=1,2"
    );
    const data = await response.json();

    return { contacts: data.data }; 
}
