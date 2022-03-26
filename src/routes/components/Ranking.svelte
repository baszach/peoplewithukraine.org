<script>
	import { writable, derived } from 'svelte/store';
	import war_contributors from '../../../static/war_contributors.json';
	import LastUpdatedCompanies from './LastUpdatedCompanies.svelte';
	import Company from './Company.svelte';

	export let logos = false;

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
	let stageD = true;
	let stageF = true;
</script>

<ul class="mt-8 text-center">
	<p>Below is a list of contributors to war (<LastUpdatedCompanies />):</p>
	<input
		bind:value={$term}
		id="searchbar"
		type="text"
		placeholder="Search company..."
		class="max-w-sm p-2 mt-8 mb-4 w-full rounded-lg bg-slate-200 placeholder-red-600"
	/>
	<div class="mt-12 md:flex md:justify-center">
		<button
			on:click={() => (stageF = !stageF)}
			class="mb-8 md:mb-0 md:mr-8 py-2 px-8 rounded-lg text-white bg-red-600
				{stageF ? 'opacity-100' : 'opacity-50'}"
		>
			<p class="text-2xl font-bold">Ranking F</p>
			<p style="font-size: 1rem;">Defying Demands for Exit or Reduction of Activities</p>
		</button>
		<button
			on:click={() => (stageD = !stageD)}
			class="py-2 px-8 rounded-lg text-white bg-orange-600
				{stageD ? 'opacity-100' : 'opacity-50'}"
		>
			<p class="text-2xl font-bold">Ranking D</p>
			<p style="font-size: 1rem;">Holding Off New Investments/Development</p>
		</button>
	</div>
	<div
		class="mt-8 grid justify-center"
		style="grid-template-columns: repeat(auto-fill, 28rem); grid-gap: 2em"
	>
		{#each $filtered as killer}
			{#if (killer.stage == null || (killer.stage === 'f' && stageF) || (killer.stage === 'd' && stageD)) && killer.stillEvil && killer.children != null}
				<div class="bg-slate-200 py-2 text-center h-max">
					<div class="bg-accent-yellow grid place-items-center">
						{#if logos}
							<img src="/killers/{killer.logo}" alt="" loading="lazy" style="max-height: 5rem" />
						{:else}
							<p class="text-red-600 font-bold text-xl">{killer.name}</p>
						{/if}
					</div>
					{#if killer.children != null}
						<div
							class={logos ? 'companies-children-grid overflow-auto' : ''}
							style="width: 100%; {logos ? 'max-height: 35rem' : ''}"
						>
							{#each killer.children as child}
								{#if logos}
									<div class="grid place-items-center">
										<img src="/killers/{child.logo}" alt="" loading="lazy" style="" />
									</div>
								{:else}
									<p>{child.name}</p>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>

	{#if !logos}
		<div
			class="mt-8 grid justify-center"
			style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));"
		>
			{#each $filtered as killer}
				{#if (killer.stage == null || (killer.stage === 'f' && stageF) || (killer.stage === 'd' && stageD)) && killer.stillEvil && killer.children == null}
					<div class="bg-slate-200 text-center h-max place-items-center grid" style="margin: 1em;">
						<!--					<div class="bg-slate-200 text-center h-max place-items-center grid" style="margin: 1em; {logos ? 'height: 11rem; width: 11rem' : ''}">-->
						<!--							<Company killer="{killer}"></Company>-->
						<!--							<img src="/killers/{killer.logo}" alt="" loading="lazy" style="max-height: 100%; max-width: 100%"/>-->
						<p class="text-red-600 font-bold text-xl">{killer.name}</p>
					</div>
				{/if}
			{/each}
		</div>
	{:else}
		<div class="mt-4 companies-with-logo">
			{#each $filtered as killer}
				{#if (killer.stage == null || (killer.stage === 'f' && stageF) || (killer.stage === 'd' && stageD)) && killer.stillEvil && killer.children == null}
					<div class="bg-slate-200" style="min-height: 12rem; min-width: 12rem;">
						<Company {killer} onlyLogos={true} />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</ul>
