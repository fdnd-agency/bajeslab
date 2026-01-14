<script>
	import Nav from '$lib/components/organisms/layout/Nav.svelte';
	import Footer from '$lib/components/organisms/layout/Footer.svelte';
	import Breadcrumbs from '$lib/components/molecules/Breadcrumbs/Breadcrumbs.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	// Gebruik $derived voor reactive waarden
	const fullCrumbs = $derived.by(() => {
		const pathname = $page.url.pathname;

		// Split path en maak breadcrumbs
		const crumbs = pathname
			.split('/')
			.filter(Boolean)
			.map((segment, index, arr) => ({
				label: segment.charAt(0).toUpperCase() + segment.slice(1),
				href: '/' + arr.slice(0, index + 1).join('/')
			}));

		// Voeg Home toe als eerste item
		return [{ label: 'Home', href: '/' }, ...crumbs];
	});

	// SEO Structured Data (JSON-LD) voor Google zoekresultaten
    const breadcrumbSchema = $derived.by(() => {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": fullCrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.label,
                "item": `${$page.url.origin}${crumb.href}`
            }))
        };
    });

	// Dynamische SEO variabelen
	const title = $derived($page.data?.title 
        ? `${$page.data.title} | Healthy Urban Living Lab` 
        : 'Healthy Urban Living Lab');
    const description = $derived($page.data?.description || "Healthy Urban Living Lab is een living lab van de Hogeschool van Amsterdam dat onderzoek doet naar het Bajeskwartier.");
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <link rel="canonical" href={$page.url.href} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="{$page.url.origin}/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={$page.url.href} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
   
</svelte:head>

<svelte:element this={'script'} type="application/ld+json">
	{JSON.stringify(breadcrumbSchema)}
</svelte:element>

<Nav />
<div class="layout">
	<main>
		{#if fullCrumbs.length > 1}
			<div class="container">
				<Breadcrumbs crumbs={fullCrumbs} />
			</div>
		{/if}

		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	.container {
		margin-top: 0rem;
	}
</style>
