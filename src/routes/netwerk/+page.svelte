<h1>Netwerk</h1>
<p>Hier komt de netwerk pagina</p>
<section class="container">
    <h1 class="title">{title}</h1>
    <section class="netwerk-cards" bind:this={gridRef}>
        {#each data.people as person}
            <div class="card-wrapper">
                <NetwerkCard {person} />
            </div>
        {/each}
    </section>
</section>

<style>
h1{
    margin-bottom: var(--spacing-lg);
}
.netwerk-cards {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.container {
    padding: var(--spacing-md, 2rem);
}

.title {
    margin-bottom: var(--spacing-lg, 2rem);
}
</style>