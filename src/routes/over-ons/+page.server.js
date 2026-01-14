export async function load({ fetch }) {
    try {
        const peopleUrl = 'https://fdnd-agency.directus.app/items/hull_people' + 
            '?fields=*,partners.hull_partners_id.*' + 
            '&filter[partners][hull_partners_id][id][_eq]=1';

        const [themeReq, contentPageReq, peopleReq] = await Promise.all([
            fetch('https://fdnd-agency.directus.app/items/hull_themes'),
            fetch('https://fdnd-agency.directus.app/items/hull_content_page'),
            fetch(peopleUrl)
        ]);

        const themes = await themeReq.json();
        const contentPage = await contentPageReq.json();
        const people = await peopleReq.json();

        return {
            themes: themes.data || [],
            contentPage: contentPage.data || [],
            people: people.data || []
        };
    } catch (error) {
        console.error('Load error:', error);
        return { themes: [], contentPage: [], people: [] };
    }
}