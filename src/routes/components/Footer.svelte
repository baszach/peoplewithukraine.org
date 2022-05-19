<script>
	import TwitterIcon from './TwitterIcon.svelte';
</script>

<nav class="px-8 py-16 font-merriweather bg-accent-gray sm:px-24 md:px-32 lg:px-48">
	<div class="lg:flex md:justify-between">
		<div class="grid place-items-center text-center sm:flex">
			<a href="/">
				<img class="h-16" src="ua.svg" alt="logo" />
			</a>
			<p class="mt-4 ml-4 place-self-center text-white font-bold">
				Support Ukraine reclaim their country.
			</p>
		</div>
		<div class="mt-12 grid place-items-center text-center sm:flex">
			<a href="https://twitter.com/pplwithukraine" target="_blank">
				<TwitterIcon size="3" />
			</a>
			<p class="mt-4 ml-4 place-self-center text-white font-bold mb-2 sm:mt-0">Follow us</p>
		</div>
	</div>
	<div class="mt-12 grid place-items-center font-bold sm:flex sm:justify-between">
		<a sveltekit:prefetch href="/act" class="mt-4 text-white md:mt-0">How to help</a>
		<a sveltekit:prefetch href="/news" class="mt-8 text-white md:mt-0">News</a>
		<a sveltekit:prefetch href="/boycott_graphic" class="mt-8 text-white md:mt-0">Boycott</a>
	</div>
</nav>
