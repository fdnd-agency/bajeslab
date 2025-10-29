export async function load({ fetch }) {
    const response = await fetch("https://fdnd-agency.directus.app/items/hull_projects");
    const data = await response.json();

    console.log(data.data);
return { projects: data.data }; 
}