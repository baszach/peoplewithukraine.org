<script>
	import { writable, derived } from 'svelte/store';
	import war_contributors from '../../static/war_contributors.json';
	import LastUpdatedCompanies from './components/LastUpdatedCompanies.svelte';

	let term = writable('');
	const items = writable(war_contributors);
	let filtered = derived([term, items], ([$term, $items]) =>
		$items.filter((company) => {
			let companyName = company.name.toLowerCase();
			let searchTerm = $term.toLowerCase();

			return (
				companyName.includes(searchTerm) ||
				(company.children != null &&
					company.children.some((child) => child.name.toLowerCase().includes(searchTerm)))
			);
		})
	);
</script>

<svelte:head>
	<title>Boycott company overview</title>
	<meta
		title="description"
		content="Quickly find companies that continue operating in Russia. Boycott them or contact them via social media."
	/>
</svelte:head>

<div class="text-left" style="max-width: 64rem; display: inline-block">
	<h1 class="text-3xl font-bold text-accent-gray text-center">
		Boycott companies that operate in Russia
	</h1>
	<p class="mt-4 text-left">
		Find the detailed boycott list here: <a sveltekit:prefetch href="/boycott" class="link"
			>Boycott detail</a
		>
	</p>
	<p class="mt-4 text-left">
		You may notice that some of these companies announced to draw back from Russia. We will leave
		them in this list for now. They kept us and the Ukrainian people waiting too, after
		all.
	</p>
	<ul class="mt-8">
		<p>Below is a list of contributors to war (<LastUpdatedCompanies />):</p>
		<input
			bind:value={$term}
			id="searchbar"
			type="text"
			placeholder="Search company..."
			class="p-2 my-4 w-full rounded-lg bg-slate-200 placeholder-red-600"
		/>
		<div style="display: grid; grid-template-columns: repeat(auto-fill, 18rem); grid-gap: 2em">
			{#each $filtered as killer}
				{#if killer.stillEvil && killer.children != null}
					<div class="bg-slate-200 py-2 text-center h-max">
						<p class="text-red-600 font-bold text-xl">{killer.name}</p>
						{#if killer.children != null}
							<div>
								{#each killer.children as child}
									<p>{child.name}</p>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
			{#each $filtered as killer}
				{#if killer.stillEvil && killer.children == null}
					<div class="bg-slate-200 py-2 text-center h-max">
						<p class="text-red-600 font-bold text-xl">{killer.name}</p>
						{#if killer.children != null}
							<div>
								{#each killer.children as child}
									<p>{child.name}</p>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</ul>
</div>
