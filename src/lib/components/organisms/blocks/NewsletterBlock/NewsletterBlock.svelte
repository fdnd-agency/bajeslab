<script>
    import NewsletterForm from '$lib/components/molecules/NewsletterForm/NewsletterForm.svelte';

    let {
        title = 'Benieuwd naar nog meer projecten?', 
        description = 'Schrijf je in voor onze nieuwsbrief en blijf op de hoogte van het laatste nieuws en updates.'
    } = $props();
</script>

<section class="newsletter-card container">
    <div class="newsletter-content">
        <h3 class="subtitle">{title}</h3>
        <p class="text">{description}</p>
    </div>
    <div class="form-wrapper">
        <NewsletterForm />
    </div>
</section>

<style>
    .newsletter-card {
        display: flex;
        flex-direction: column; 
        align-items: center;    
        text-align: center;
		padding: 2rem;
		background-color: var(--color-accent3-l3);
        border: 1px solid var(--color-accent3-l2);
        font-family: 'Urbanist', sans-serif;
   }

    .newsletter-content p {
        margin: 0.75em 0 1.5em;
        max-width: 45ch; 
	}

    .form-wrapper {
        width: 100%;
        display: flex;
        justify-content: center; 
    }
</style>