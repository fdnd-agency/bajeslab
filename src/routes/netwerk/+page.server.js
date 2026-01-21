import { PUBLIC_PEOPLE_ENDPOINT } from '$env/static/public';

export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_PEOPLE_ENDPOINT}?fields=*,partners.hull_partners_id.*`);

	const { data: people } = await res.json();

	return {
		people,
		title: 'Netwerk',
		description:
			'Ontdek het uitgebreide netwerk van het Healthy Urban Living Lab, inclusief onze gewaardeerde partners en samenwerkingsverbanden die bijdragen aan innovatieve stedelijke oplossingen.'
	};
}
