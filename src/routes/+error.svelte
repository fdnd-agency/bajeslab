<script>
    import { page } from '$app/stores';
</script>

<main>
    <h2>Er is iets fout gegaan.</h2>
    <p>Deze pagina bestaat niet of is tijdelijk niet beschikbaar.</p>
    <p class="error-message">{$page.status}: {$page.error.message}</p>
</main>

<style>
    
</style>