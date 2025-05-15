<script>
    import ThemaLijnen from "$lib/molecules/ThemaLijnen.svelte";

    let { data } = $props()
    let { projects } = data

    function truncateWords(string, numberWords) {
        if (!string) return '';
        return string.split(' ').slice(0, numberWords).join(' ') + (string.split(' ').length > numberWords ? '...' : '');
    }

    console.log(projects)
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
        <ul>
            {#each projects as project}
                <li>
                    <h3>{project.title}</h3>
                    <img src="{project.cover_image.filename_disk}" alt="">
                    {@html truncateWords(project.description, 15)}
                    <a href="/projecten/{project.slug}">zie meer</a>
                </li>
            {/each}
        </ul>
    </section>


    
</main>

<style>

</style>