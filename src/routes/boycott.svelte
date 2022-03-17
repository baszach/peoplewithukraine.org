<script>
	import war_contributors from '../../static/war_contributors.json';
	import Company from "./components/Company.svelte";

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
	<!-- <input
		on:keyup={filterCompanies}
		id="searchbar"
		type="text"
		placeholder="Search.."
		class="bg-gray-100"
	/> -->
	<p>
		Find the overview list here: <a href="/boycott_overview">peoplewithukraine.org/boycott_overview</a>
	</p>
	<ul class="mt-8">
		<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
		<div style="display: grid; grid-template-columns: repeat(auto-fill, 36rem); grid-gap: 2em; justify-content: center">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children != null}
					<Company killer="{killer}" />
				{/if}
			{/each}
		</div>
		<div style="display: grid; grid-template-columns: repeat(auto-fill, 18rem); grid-gap: 2em; justify-content: center;" class="mt-4">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null}
					<Company killer="{killer}" />
				{/if}
			{/each}
		</div>
	</ul>
</div>
