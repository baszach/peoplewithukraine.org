<script>
	import war_contributors from '../../static/war_contributors.json';
	import Company from './components/Company.svelte';
</script>

<svelte:head>
	<title>Boycott company overview</title>
	<meta
		title="description"
		content="Quickly find companies that continue operating in Russia. Boycott or contact them via social media."
	/>
</svelte:head>

<div class="m-12">
	<h1 class="text-3xl font-bold text-accent-gray text-center">Boycott</h1>
	<p class="mt-4">
		Putin's war drains millions of dollars every minute. Upholding business operations in Russia
		funds this war. This has to stop immediately. Boycott companies that continue creating value for
		Putin. Contact the companies via social media like LinkedIn or Twitter and urge them to stop.
	</p>
	<p class="mt-4">
		Find the quick overview list here: <a sveltekit:prefetch href="/boycott_overview" class="link"
			>Boycott overview</a
		>
	</p>
	<ul class="mt-8">
		<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
		<div
			style="display: grid; grid-template-columns: repeat(auto-fill, 36rem); grid-gap: 2em; justify-content: center"
		>
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children != null}
					<Company {killer} />
				{/if}
			{/each}
		</div>
		<div
			style="display: grid; grid-template-columns: repeat(auto-fill, 18rem); grid-gap: 2em; justify-content: center;"
			class="mt-4"
		>
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null}
					<Company {killer} />
				{/if}
			{/each}
		</div>
	</ul>
</div>
