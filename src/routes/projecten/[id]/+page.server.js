// Deze functie draait op de server en haalt de juiste data op voor deze productpagina.
export async function load({ params, fetch }) {
    const id = Number(params.id); // Huidig product-ID uit de URL
  
    // --- Huidig product ophalen ---
    const res = await fetch(`https://fdnd-agency.directus.app/items/hull_projects/${id}`);
    const { data: projects } = await res.json();
  
    // --- Vorige product (id kleiner dan huidig) ---
    const prevRes = await fetch(
      `https://fdnd-agency.directus.app/items/hull_projects?filter[id][_lt]=${id}&sort=-id&limit=1`
    );
    const { data: prev } = await prevRes.json();
  
    // --- Volgende product (id groter dan huidig) ---
    const nextRes = await fetch(
      `https://fdnd-agency.directus.app/items/hull_projects?filter[id][_gt]=${id}&sort=id&limit=1`
    );
    const { data: next } = await nextRes.json();
  
    // We geven alles terug aan de Svelte page
    return {
      projects,
      prev: prev?.[0] ? { id: prev[0].id, title: prev[0].title } : null,
      next: next?.[0] ? { id: next[0].id, title: next[0].title } : null
    };
}
