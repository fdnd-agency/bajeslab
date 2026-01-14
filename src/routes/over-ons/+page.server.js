export async function load({ fetch }) {
    try {
        const [themeReq, contentPageReq] = await Promise.all([
            fetch('https://fdnd-agency.directus.app/items/hull_themes'),
            fetch('https://fdnd-agency.directus.app/items/hull_content_page')
        ]);

        // We halen de data op, maar zorgen voor een fallback naar lege arrays/objecten als het mislukt
        const themes = themeReq.ok ? await themeReq.json() : { data: [] };
        const contentPage = contentPageReq.ok ? await contentPageReq.json() : { data: {} };

        // ALLES in één return object
        return {
            themes: themes.data,
            contentPage: contentPage.data,
            // SEO SET
            title: "Over ons",
            description: "Leer meer over het Healthy Urban Living Lab, onze missie, visie en het team dat zich inzet voor innovatieve stedelijke oplossingen."
        };
    } catch (error) {
        console.error("Load error:", error);
        return {
            themes: [],
            contentPage: {},
            title: "Over ons",
            description: "Informatie over Healthy Urban Living Lab."
        };
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
            return { success: false, message: 'Fout bij inschrijven!' };
        }
    }
};