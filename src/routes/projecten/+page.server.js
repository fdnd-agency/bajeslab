export async function load({ fetch }) {
    const response = await fetch("https://fdnd-agency.directus.app/items/hull_projects");
    const data = await response.json();

    return { 
        projects: data.data,
        title: "Projecten", 
        description: "Ontdek de diverse projecten van het Healthy Urban Living Lab die bijdragen aan innovatieve stedelijke oplossingen."
    }; 
};