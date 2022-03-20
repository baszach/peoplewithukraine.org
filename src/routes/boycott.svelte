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
<div style="text-align: center">
	<div style="max-width: 64rem; display: inline-block">
		<h1 class="text-3xl font-bold text-accent-gray text-center">
			Boycott companies that operate in Russia
		</h1>
		<p class="my-4 text-left">
			Putin's war drains millions of dollars every minute. Upholding business operations in Russia
			funds this war. This has to stop immediately. Boycott companies that continue creating value
			for Putin. Contact the companies via social media like LinkedIn or Twitter and urge them to
			stop.
		</p>
		<p class="mt-4 text-left">
			Find the quick overview list here: <a sveltekit:prefetch href="/boycott_overview" class="link"
				>Boycott overview</a
			>
		</p>
	</div>
	<ul class="mt-8">
		<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
		<div class="companies-group">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children != null}
					<Company {killer} />
				{/if}
			{/each}
		</div>
		<div class="mt-4 companies-with-pic">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null && killer.pic != null}
					<Company {killer} />
				{/if}
			{/each}
		</div>
		<div class="mt-4 companies-with-logo">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null && killer.pic == null && killer.logo != null}
					<div class="bg-background-color">
						<Company {killer} />
					</div>
				{/if}
			{/each}
		</div>
	</ul>
</div>
