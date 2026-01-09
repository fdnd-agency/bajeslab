<script>
	let { crumbs = [], separator = '›' } = $props();
</script>

{#if crumbs.length > 0}
	<nav class="breadcrumbs">
		<ol>
			{#each crumbs as crumb, index}
				<li>
					{#if !crumb.isLast && index !== crumbs.length - 1}
						<a href={crumb.href}>{crumb.label}</a>
						<span class="separator">{separator}</span>
					{:else}
						<span class="current-page">{crumb.label}</span>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}

<style>
	.breadcrumbs {
		font-size: 1em;
		padding: 1rem 0;
	}

	.breadcrumbs ol {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 0.5rem;
	}

	.breadcrumbs li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.breadcrumbs a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		text-decoration: underline;
	}

	.breadcrumbs .current-page {
		color: black;
		font-weight: 600;
	}

	.separator {
		color: var(--color-border);
	}
</style>
