<script>
	import { writable, derived } from 'svelte/store';
	import war_contributors from '../../static/war_contributors.json';

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
	<title>These companies continue business in Russia.</title>
	<meta
		title="description"
		content="Many companies have found smart ways to either close businesses in Russia or evade paying taxes. These actions
		contribute to stopping the cruel war in Ukraine. The companies still paying taxes and supporting Russia... are listed here.
		Boycott them."
	/>
</svelte:head>

<div class="m-12">
	<h1 class="text-3xl font-bold text-accent-gray text-center">
		Boycott companies that operate in Russia
	</h1>
	<p class="mt-4">
		Find the detailed boycott list here: <a sveltekit:prefetch href="/boycott" class="link"
			>Boycott overview</a
		>
	</p>
	<ul class="mt-8">
		<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
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
