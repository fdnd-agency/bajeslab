<script>
	import Nav from '$lib/components/organisms/layout/Nav.svelte';
	import Footer from '$lib/components/organisms/layout/Footer.svelte';
	import Breadcrumbs from '$lib/components/molecules/Breadcrumbs/Breadcrumbs.svelte';
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// View Transitions voor SvelteKit navigatie
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		
		// Respecteer prefers-reduced-motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	
	// Dynamische SEO variabelen
	const title = $derived($page.data?.title 
        ? `${$page.data.title} | Healthy Urban Living Lab` 
        : 'Healthy Urban Living Lab');
    const description = $derived($page.data?.description || "Healthy Urban Living Lab is een living lab van de Hogeschool van Amsterdam dat onderzoek doet naar het Bajeskwartier.");

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
    const jsonLd = $derived.by(() => ({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${$page.url.origin}/#organization`,
				"name": "Healthy Urban Living Lab",
				"url": $page.url.origin,
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Amsterdam",
					"addressCountry": "NL"
				},
				"memberOf": {
					"@type": "Organization",
					"name": "Hogeschool van Amsterdam",
					"url": "https://www.hva.nl"
				}
			},
			{
				"@type": "WebSite",
				"@id": `${$page.url.origin}/#website`,
				"url": $page.url.origin,
				"name": "Healthy Urban Living Lab",
				"publisher": {
					"@id": `${$page.url.origin}/#organization`
				}
			},
			{
				"@type": "WebPage",
				"@id": `${$page.url.href}#webpage`,
				"url": $page.url.href,
				"name": title,
				"description": description,
				"isPartOf": {
					"@id": `${$page.url.origin}/#website`
				},
				"breadcrumb": {
					"@id": `${$page.url.href}#breadcrumb`
				}
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${$page.url.href}#breadcrumb`,
				"itemListElement": fullCrumbs.map((crumb, index) => ({
					"@type": "ListItem",
					"position": index + 1,
					"name": crumb.label,
					"item": `${$page.url.origin}${crumb.href}`
				}))
			}
		]
	}));
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
	<meta name="google-site-verification" content="k9HBPb2To9cyQqQ0xKz--GEdxUUBE_IqnJBX-pdo6rg" />
    <link rel="canonical" href={$page.url.href} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={$page.url.href} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
   
</svelte:head>

<svelte:element this={'script'} type="application/ld+json">
	{JSON.stringify(jsonLd)}
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
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
	}

	:global(::view-transition-old(root)) {
		animation-name: fade-blur-out;
	}

	:global(::view-transition-new(root)) {
		animation-name: fade-blur-in;
	}

	@keyframes fade-blur-out {
		to {
			opacity: 0;
			filter: blur(8px);
		}
	}

	@keyframes fade-blur-in {
		from {
			opacity: 0;
			filter: blur(8px);
		}
	}

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
