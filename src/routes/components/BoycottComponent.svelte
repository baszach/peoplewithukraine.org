<script>
	import ActHeader from './ActHeader.svelte';
	import LastUpdatedCompanies from './LastUpdatedCompanies.svelte';

	export let section;
</script>

<ActHeader section="boycott" />
<div class="text-left">
	<h1 class="text-3xl font-bold text-accent-gray text-center">
		Boycott companies that operate in Russia
	</h1>
	<p class="mt-4">
		Putin's war drains millions of dollars every minute. Upholding business operations in Russia
		funds this war. This has to stop immediately. Boycott companies that continue creating value for
		Putin.
	</p>
	<p class="mt-4 text-2xl font-bold text-accent-gray">
		Contact the companies via social media and urge them to stop.
	</p>
	<p class="italic text-accent-gray">click on company's image to see the links</p>

	<p class="mt-4">
		You may notice that some of these companies announced to draw back from Russia. We will leave
		them in this list for a bit longer. They kept us and the Ukrainian people waiting too, after
		all.
	</p>
	<div class="mt-4 boycott-type place-items-center">
		<a
			href="boycott_graphic"
			class="mt-4 py-2 px-8 rounded-2xl text-2xl font-bold text-white bg-ukraine-blue mx-4
            {section === 'graphic' ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Graphic
		</a>
		<a
			href="boycott_names"
			class="mt-4 py-2 px-8 rounded-2xl text-2xl font-bold text-white bg-ukraine-blue mx-4
            {section === 'names' ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Names
		</a>
		<a
			href="boycott_logos"
			class="mt-4 py-2 px-8 rounded-2xl text-2xl font-bold text-white bg-ukraine-blue mx-4
            {section === 'logos' ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Logos
		</a>
	</div>
	<p class="mt-8 text-left">Below is a list of contributors to war (<LastUpdatedCompanies />):</p>
	<p class="text-xs text-accent-gray">
		Source: <a
			href="https://www.yalerussianbusinessretreat.com/"
			target="_blank"
			class="text-xs text-accent-gray font-bold link">yalerussianbusinessretreat.com</a
		>
	</p>
</div>
