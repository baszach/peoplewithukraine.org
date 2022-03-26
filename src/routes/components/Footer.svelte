<script>
	import TwitterIcon from './TwitterIcon.svelte';
</script>

<nav class="px-8 py-4 font-merriweather bg-accent-gray sm:px-24 md:px-32 lg:px-48">
	<div class="flex">
		<a href="/">
			<img class="h-16" src="ua.svg" alt="logo" />
		</a>
		<p class="place-self-center ml-4 text-white font-bold">Save Ukraine, close the sky.</p>
	</div>
	<div class="mt-8 grid place-items-center font-bold sm:flex sm:justify-between">
		<a sveltekit:prefetch href="/act" class="mt-6 text-white md:mt-0">How to help</a>
		<a sveltekit:prefetch href="/news" class="mt-6 text-white md:mt-0">News</a>
		<a sveltekit:prefetch href="/boycott_graphic" class="mt-6 text-white md:mt-0">Boycott companies operating in Russia</a>
	</div>
	<div class="mt-12 mb-8 grid place-items-center sm:flex sm:justify-end">
		<span class="place-self-center text-white font-bold mb-2 sm:mt-0 sm:mr-4">Follow us</span>
		<a href="https://twitter.com/pplwithukraine" target="_blank">
			<TwitterIcon size="3" />
		</a>
	</div>
</nav>
