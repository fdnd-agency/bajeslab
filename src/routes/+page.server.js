export async function load({ fetch }) {
	try {
		const [projectReq, themeReq, contentPageReq] = await Promise.all([
			fetch('https://fdnd-agency.directus.app/items/hull_projects'),
			fetch('https://fdnd-agency.directus.app/items/hull_themes'),
			fetch('https://fdnd-agency.directus.app/items/hull_content_page')
		]);

		if (projectReq.ok && themeReq.ok && contentPageReq.ok) {
			const projects = await projectReq.json();
			const themes = await themeReq.json();
			const contentPage = await contentPageReq.json();

			// console.log(contentPage.data);

			return {
				projects: projects.data,
				themes: themes.data,
				contentPage: contentPage.data[0]
			};
		}
	} catch (error) {
		console.error(error);
	}
}

export const actions = {
    newsletter: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        // Validatie aan de serverkant
        if (!email || !email.toString().includes('@')) {
            return { success: false, message: 'Vul een geldig e-mailadres in.' };
        }

        const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2lrZ2p5a3dldXRlZmV4d2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDA4MjgsImV4cCI6MjA2ODA3NjgyOH0.PJYtzz6nUErRhJZnck2dugwcjnJ6p2dBqpZsJfbK7aU'; // Jouw volledige key

        try {
            const apiResponse = await fetch(
                'https://lgcikgjykweutefexwlm.supabase.co/rest/v1/hull_newsletter_subscriptions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        apikey: ANON_KEY,
                        Authorization: `Bearer ${ANON_KEY}`,
                        'Prefer': 'resolution=merge-duplicates' // Optioneel: negeer dubbele inschrijvingen
                    },
                    body: JSON.stringify({ email: email })
                }
            );

            if (apiResponse.ok) {
                return { 
                    success: true, 
                    message: '✓ Je bent succesvol aangemeld!' 
                };
            } 
            
            // Specifieke check voor Supabase/PostgREST error codes (indien nodig)
            const errorData = await apiResponse.json();
            if (apiResponse.status === 409 || errorData.code === '23505') {
                return { success: false, message: 'Dit e-mailadres is al bekend bij ons.' };
            }

            return { success: false, message: 'Er ging iets mis. Probeer het later nog eens.' };

        } catch (error) {
            console.error('Newsletter error:', error);
            return { success: false, message: 'Serverfout. Controleer je verbinding.' };
        }
    }
};