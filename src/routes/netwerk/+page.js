import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			people: await directus.request(readItems('hull_people', {
				fields: [
					'id',
					'name',
					'position',
					'link',
					{
						image: ['id', 'filename_disk', 'description', 'height', 'width']
					},
					'partners'
				]
			})),
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}