export async function load({ fetch }) {
	try {
		const [projectReq, themeReq] = await Promise.all([
			fetch('https://fdnd-agency.directus.app/items/hull_projects'),
			fetch('https://fdnd-agency.directus.app/items/hull_themes')
		]);

		if (projectReq.ok && themeReq.ok) {
			const projects = await projectReq.json();
			const themes = await themeReq.json();

			console.log(themes.data);
			return {
				projects: projects.data,
				themes: themes.data
			};
		}
	} catch (error) {
		console.error(error);
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		const ANON_KEY =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2lrZ2p5a3dldXRlZmV4d2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDA4MjgsImV4cCI6MjA2ODA3NjgyOH0.PJYtzz6nUErRhJZnck2dugwcjnJ6p2dBqpZsJfbK7aU';

		try {
			const apiResponse = await fetch(
				'https://lgcikgjykweutefexwlm.supabase.co/rest/v1/hull_newsletter_subscriptions',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						apikey: ANON_KEY,
						Authorization: `Bearer ${ANON_KEY}`
					},
					body: JSON.stringify({
						email: email
					})
				}
			);

			if (apiResponse.ok) {
				return { success: true, message: '✓ Ingeschreven!' };
			} else {
				return { success: false, message: 'Mislukt!' };
			}
		} catch (error) {
			console.error(error);
		}
	}
};
