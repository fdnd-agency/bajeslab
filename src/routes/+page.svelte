<script>
    import DirectusImage from '$lib/atoms/DirectusImage.svelte';
    import ThemaLijnen from "$lib/molecules/ThemaLijn.svelte";
    import ProjectsOverview from "$lib/organisms/ProjectsOverview.svelte";

    let { data } = $props()
    let { projects } = data

    console.log(data.projects[0].cover_image?.id)

    

</script>

<main>
    <section>
        <h1>Healthy Urban Living Lab</h1>
        <button> zie content ↓</button>
    </section> 
    <section id="about">
        <p>Hier komt een kort stukje van waar de Healthy Urban Living Lab over gaat</p>
    </section>
    <section>
        <h2>Thema lijnen</h2>
        <ThemaLijnen />
    </section>
    <section>
        <!-- insert carrousel -->
    </section>
    <section>
        <h2>Uitgelichte projecten</h2>
        <ProjectsOverview projects={data.projects} truncate={true}/>
    </section>
</main>

<style>

</style>