import { PUBLIC_PROJECTS_ENDPOINT } from '$env/static/public';

// +page.server.js
export async function load({ params, fetch }) {
	const slug = params.slug;

	// Huidig project MET alle relaties
	const res = await fetch(
		`${PUBLIC_PROJECTS_ENDPOINT}?filter[slug][_eq]=${slug}&fields=*,partners.hull_partners_id.*,images.directus_files_id.*`
	);
	const { data: projects } = await res.json();
	const project = projects[0];

	if (!project) {
		return { status: 404, error: new Error('Project niet gevonden') };
	}

	// console.log('Project data:', project);

	const projectId = project.id;

	// Vorige project
	const prevRes = await fetch(
		`https://fdnd-agency.directus.app/items/hull_projects?filter[id][_lt]=${projectId}&sort=-id&limit=1&fields=slug,title`
	);
	const { data: prevData } = await prevRes.json();
	const prev = prevData?.[0] ? { slug: prevData[0].slug, title: prevData[0].title } : null;

	// Volgende project
	const nextRes = await fetch(
		`https://fdnd-agency.directus.app/items/hull_projects?filter[id][_gt]=${projectId}&sort=id&limit=1&fields=slug,title`
	);
	const { data: nextData } = await nextRes.json();
	const next = nextData?.[0] ? { slug: nextData[0].slug, title: nextData[0].title } : null;

	return { project, prev, next };
}
