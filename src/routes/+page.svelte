<script>
    import HeroBlock from '$lib/components/homepage/HeroBlock.svelte';
    import ProjectenBlock from '$lib/components/homepage/ProjectenBlock.svelte';

    export let data; // komt van +page.server.js
    const { projects } = data;
</script>

<HeroBlock />
<ProjectenBlock {projects}/>