import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			posts: await directus.request(readItems('hull_blog', {
				fields: [
					'id',
					'slug',
					'title',
					{
						cover_image: ['id', 'filename_disk', 'description', 'height', 'width']
					},
					'content',
					'publish_date',
					'authors'
				]
			})),
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}