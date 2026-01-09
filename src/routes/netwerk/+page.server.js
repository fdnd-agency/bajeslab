export async function load({ fetch }) {
	const res = await fetch(
	  "https://fdnd-agency.directus.app/items/hull_people" +
	  "?fields=*,partners.hull_partners_id.*"
	);
  
	const { data: people } = await res.json();
  
	return { people };
  }
  