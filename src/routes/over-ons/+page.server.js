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
    newsletter: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        // Validatie
        if (!email || !email.toString().includes('@')) {
            return { success: false, message: 'Vul een geldig e-mailadres in.' };
        }

        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const apiResponse = await fetch(
                'https://lgcikgjykwuetfexwlm.supabase.co/rest/v1/hull_newsletter_subscriptions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        apikey: apiKey,
                        Authorization: `Bearer ${apiKey}`,
                        'Prefer': 'resolution=merge-duplicates'
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
