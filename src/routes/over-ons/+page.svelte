<script>
    import AboutBlock from '$lib/components/organisms/blocks/AboutBlock/AboutBlock.svelte';
    import TeamBlock from '$lib/components/organisms/blocks/TeamBlock/TeamBlock.svelte';
    import ThemelinesBlock from '$lib/components/organisms/blocks/ThemelinesBlock/ThemelinesBlock.svelte';
    
    export let data; // komt van +page.server.js
    const { themes, people } = data;
</script>

<AboutBlock
    title="Over ons"
    description="In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn. Sinds 2023 bevindt de ontwikkeling van het Bajeskwartier zich in een nieuwe fase. De eerste gebouwen zijn opgeleverd, en uiteindelijk komen er 2.500 tot 3.500 mensen te wonen, verdeeld over 1.350 appartementen (huur en koop). De sociale huurwoningen bieden plek aan een diverse groep bewoners: studenten, ouderen, statushouders en mensen die extra begeleiding nodig hebben vanwege sociale of psychische problemen. Daarnaast zijn de middelbare school Spinoza 21st en Hotel Jansen, een verblijf voor internationale studenten en expats, in de wijk gevestigd."
    image="/images/over-ons.png"
/>

<TeamBlock {people} />

<ThemelinesBlock
    {themes}
    title="Themalijnen"
    layout="column"
    showIntro
    showButton={false}
    buttonText="Lees meer"
    buttonPosition="flex-end"
    buttonLink="/over-ons#theme-line"
/>