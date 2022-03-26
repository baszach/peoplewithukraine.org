<script>
	let linksOpen = false;
</script>

<div class="px-8 py-4 font-merriweather shadow-md sm:px-24 md:px-32 lg:px-48">
	<div class="flex justify-between items-center">
		<a sveltekit:prefetch href="/">
			<div class="flex">
				<img src="ua.svg" alt="logo" class="h-16" />
			</div>
		</a>
		<button
			class="h-full px-6 py-2 z-50 rounded-2xl font-bold hover:shadow-lg lg:hidden {linksOpen
				? 'bg-accent-yellow text-black'
				: 'bg-ukraine-blue hover:text-ukraine-yellow text-white'}"
			on:click={() => (linksOpen = !linksOpen)}
		>
			<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
				{#if linksOpen}
					<path
						fill-rule="evenodd"
						d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
					/>
				{:else}
					<path
						fill-rule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
					/>
				{/if}
			</svg>
		</button>
		<button
			class="fixed z-40 bg-black opacity-50 inset-x-0 inset-y-0 w-full h-full cursor-default lg:hidden {linksOpen
				? 'block'
				: 'hidden'}"
			on:click={() => (linksOpen = false)}
		/>
		<div
			class="absolute right-8 top-20 p-16 z-50 font-bold text-center rounded-md bg-accent-yellow sm:right-24 md:right-32 lg:p-0 lg:font-light lg:relative lg:right-0 lg:top-0 lg:bg-opacity-0 lg:flex {linksOpen
				? 'block'
				: 'hidden'}"
		>
			<div>
				<a
					sveltekit:prefetch
					on:click={() => (linksOpen = false)}
					href="/boycott_graphic"
					class="hover:text-ukraine-blue text-lg lg:mr-12"
				>
					How To Help
				</a>
			</div>
			<div class="mt-10 lg:mt-0">
				<a
					sveltekit:prefetch
					on:click={() => (linksOpen = false)}
					href="/news"
					class="hover:text-ukraine-blue text-lg"
				>
					News Resources
				</a>
			</div>
		</div>
	</div>
</div>
