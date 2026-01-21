import { PUBLIC_PROJECTS_ENDPOINT } from '$env/static/public';

export async function load({ fetch }) {
	const response = await fetch(PUBLIC_PROJECTS_ENDPOINT);
	const data = await response.json();

	return {
		projects: data.data,
		title: 'Projecten',
		description:
			'Ontdek de diverse projecten van het Healthy Urban Living Lab die bijdragen aan innovatieve stedelijke oplossingen.'
	};
}
