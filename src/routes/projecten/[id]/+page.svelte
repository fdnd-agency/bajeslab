<script>
    import Button from '$lib/components/atoms/Button/Button.svelte';
    export let data;
</script>

<section class="container">
    <h1 class="subtitle">{data.projects.title}</h1>

    <div class="project-info">
        <p class="text">{data.projects.year}</p>
        <p class="text">Partners: {data.projects.partners}</p>
    </div>

    <section class="project-description text">
        {@html data.projects.description}
    </section>

    <!-- <div class="images">
        {#each data.projects.images as id}
            <img src={`https://fdnd-agency.directus.app/assets/${id}`} alt={`Project image ${id}`} />
        {/each}
    </div>
    {"errors":[{"message":"You don't have permission to access this.","extensions":{"code":"FORBIDDEN"}}]} -->

    <nav class="nav {data.prev && data.next ? 'both' : data.next ? 'only-next' : 'only-prev'}">
        {#if data.prev}
            <Button
                href={`/projecten/${data.prev.id}`}
                text={`${data.prev.title}`}
            />
        {/if}

        {#if data.next}
            <Button
                href={`/projecten/${data.next.id}`}
                text={`${data.next.title}`}
            />
        {/if}
    </nav>
</section>

<style>
    p{
        color: var(--color-accent1-base);
        font-weight: 900;
    }
    .nav {
        display: flex;
        margin-top: 2rem;
    }

    /* beide knoppen aanwezig → links & rechts */
    .nav.both {
        justify-content: space-between;
    }

    /* alleen volgende → rechts */
    .nav.only-next {
        justify-content: flex-end;
    }

    /* alleen vorige → links */
    .nav.only-prev {
        justify-content: flex-start;
    }
</style>
