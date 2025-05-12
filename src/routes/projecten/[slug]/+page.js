import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			projects: await directus.request(readItems('hull_projects', {
				filter: {
					slug: {
						_eq: params.slug
					}
				},
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
					{
						images: [{directus_files_id: [
							'filename_disk', 
							'description', 
							'height', 
							'width'
						]}]
					},
				] 
			})),
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}