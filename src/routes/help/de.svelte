<script>
	import Germany from '../components/Germany.svelte';

	function cityClick(id) {
		cityText = cities[id].text;
	}

	const cities = [
		{ id: 0, name: 'Munich', text: '<div class="text-red-500"><h1>Munich</h1></div>' },
		{ id: 1, name: 'Berlin', text: 'Berlin, lorem ipsum lorem lorem. Impsum lorem!' },
		{ id: 2, name: 'Cologne', text: 'Cologne, lorem ipsum lorem lorem. Impsum lorem!' }
	];

	let cityText = cities[0].text;
</script>

<Germany />

<div class="flex">
	{#each cities as { id, name }}
		<button on:click={() => cityClick(id)} class="city_label">
			{name}
		</button>
	{/each}
	<div class="w-72 bg-accent-yellow text-center rounded-md">
		{@html cityText}
	</div>
</div>
