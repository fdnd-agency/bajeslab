import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			projects: await directus.request(readItems('hull_projects', { 
				filter: {
					highlighted: { _eq: true }
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
			partners: await directus.request(readItems('hull_partners', {
				fields: [
					'id',
					'title', 
					'link',
					{
						logo: ['id', 'filename_disk', 'description', 'height', 'width']
					},
					'people',
					'projects'
				]
			})),
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
			blogposts: await directus.request(readItems('hull_blog', {
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