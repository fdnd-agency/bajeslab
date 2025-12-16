<script>
    import ContactCard from "$lib/components/molecules/ContactCard/ContactCard.svelte";
    let { 
        title = "Contact", 
        data 
    } = $props();
</script>

<section class="container">
    <h1 class="title">{title}</h1>

    <section class="info">
        <p class="text">
            Heeft u vragen over ons werk of projecten? Neem gerust contact met ons op.
        </p>

        <p class="text">
            Algemene e-mail:
            <a href="mailto:" class="email"></a>
        </p>

        <p class="text">
            Algemene nummer:
            <a href="tel:" class="number"></a>
        </p>
    </section>

    <section class="contact-cards">
        {#each data.contacts as contact}
            <ContactCard {contact} />
        {/each}
    </section>
</section>

<style>
    .email, .number{
        font-weight: bold;

        &:hover{
            text-decoration: underline;
        }
    }
    .info{
        margin-bottom: var(--spacing-lg);
        margin-top: var(--spacing-lg);
        p{
            margin-bottom: var(--spacing-sm);
        }
    }
    .contact-cards{
        container-type: inline-size;
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);

        @media (min-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
            
        }
    }
</style>
