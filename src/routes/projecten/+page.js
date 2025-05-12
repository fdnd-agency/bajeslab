import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			projects: await directus.request(readItems('hull_projects', {
				fields: [
					'id', 
					'slug', 
					'title', 
					{
						cover_image: ['id', 'filename_disk', 'description', 'height', 'width']
					},
					'description', 
					'type', 
					'partners',
				] 
			})),
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}