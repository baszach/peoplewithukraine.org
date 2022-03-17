<script>
	import war_contributors from '../../static/war_contributors.json';

	function filterCompanies() {
		filteredKillers = killers.filter((killer) => {
			let input = document.getElementById('searchbar').textContent.toLowerCase();
			return killer.name.toLowerCase().includes(input);
		});
	}

	const killers = war_contributors;
	let filteredKillers = killers;
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
	<h1 class="text-3xl font-bold text-accent-gray text-center">Boycott</h1>
	<p class="mt-4">
		Putin's war drains millions of dollars every minute. Upholding business operations in Russia
		funds this war. This has to stop immediately. Boycott companies that continue creating value for
		Putin. Contact the companies via social media like LinkedIn or Twitter and urge them to stop.
	</p>
	<!-- <input
		on:keyup={filterCompanies}
		id="searchbar"
		type="text"
		placeholder="Search.."
		class="bg-gray-100"
	/> -->
	<ul class="mt-8">
		<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
		<div style="display: grid; grid-template-columns: repeat(auto-fill, 18rem); grid-gap: 2em">
			{#each war_contributors as killer}
				{#if killer.stillEvil}
					<div class="bg-slate-200 py-2 text-center h-max">
						<p class="text-red-600 font-bold text-xl">{killer.name}</p>
						<!-- <p>{killer.info}</p> -->
						<!-- <div class="grid place-items-center">
							{#if killer.pic != null}
								<img src="/killers/{killer.pic}" alt="" class="mt-2 h-64" />
							{:else}
								<img src="/killers/{killer.logo}" alt="" class="mt-2" style="width: 9rem" />
							{/if}
						</div> -->

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
