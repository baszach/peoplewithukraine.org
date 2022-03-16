<script>
	export let linkPath;
	export let linkText;
</script>

<div class="grid">
	<div class="p-8 max-w-md text-center rounded-lg bg-accent-yellow shadow-xl">
		<slot />
	</div>
	<a
		sveltekit:prefetch
		href={linkPath}
		class="px-6 py-2 mt-12 place-self-center z-30 rounded-2xl bg-ukraine-blue text-white font-bold hover:shadow-lg hover:text-ukraine-yellow"
	>
		{linkText}
	</a>
</div>
