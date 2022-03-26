<script>
	export let section;
</script>

<div class="grid place-items-center sm:flex sm:justify-center mb-16">
	<a
		href="donate"
		class="py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
			{section === 'donate' ? 'opacity-50 cursor-not-allowed' : ''}"
	>
		Donate
	</a>
	<a
		href="act"
		class="mt-4 sm:mt-0 mx-4 py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
			{section === 'act' ? 'opacity-50 cursor-not-allowed' : ''}"
	>
		Act
	</a>
	<a
		href="boycott_graphic"
		class="mt-4 sm:mt-0 py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
			{section === 'boycott' ? 'opacity-50 cursor-not-allowed' : ''}"
	>
		Boycott
	</a>
</div>
