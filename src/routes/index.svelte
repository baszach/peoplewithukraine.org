<script>
	import IndexCard from './components/IndexCard.svelte';
</script>

<svelte:head>
	<title>The world stands with Ukraine!</title>
	<meta
		title="description"
		content="Welcome to peoplewithukraine.org! Together we can fight against the war in Ukraine.
	Here you can find ways to help the people of Ukraine and companies to boycott during this crisis. We also provide a few news resources."
	/>
</svelte:head>

<div>
	<div class="grid place-items-center text-center lg:flex lg:justify-between">
		<div class="max-w-lg">
			<span class="text-xl">
				On the 24th of February 2022 a free and democratic country was attacked by
				<span class="font-bold text-red-500">Russia</span>.
				The world has to act right now. 
			</span>
			<h1 class="text-5xl pt-4 font-bold text-ukraine-blue lg:pt-24 ">SUPPORT UKRAINE</h1>
		</div>
		<img src="ua_map.svg" alt="Ukraine map" class="mt-8 h-72 lg:h-80 lg:mt-0" />
	</div>

	<div class="m-12">
		<div
			class="absolute z-10 left-0 w-full bg-gradient-to-r from-ukraine-blue to-ukraine-yellow opacity-60"
			style="height: 28em;"
		/>
		<img
			src="ua_img_1.jpg"
			alt="Stop war"
			class="absolute z-0 w-full left-0 object-cover"
			style="height: 28em;"
		/>
	</div>

	<div
		class="mt-80 grid place-items-center lg:flex lg:justify-between lg:mt-96 lg:place-items-start"
	>
		<div class="z-30 lg:mr-6">
			<IndexCard linkPath="/act" linkText="HOW TO HELP">
				<p>
					Millions of people from Ukraine have fled the destruction of their
					country. We need to help both the people inside Ukraine and the ones who left her.
				</p>
				<br />
				<p>
					People all around the world have gathered in unison to demonstrate against the war crimes
					of Putin and Russia. The people of Ukraine need every voice they can get. Especially from
					Russia.
				</p>
				<br />
				<p>Go out and make a difference.</p>
			</IndexCard>
		</div>
		<div class="z-30 mt-12 lg:mt-0">
			<IndexCard linkPath="boycott" linkText="BOYCOTT">
				<p>
					Businesses continue operating and paying taxes in Russia. This money is being used by Russia
					to strengthen it's army. An army that is bombing civilians and blocks humanitarian aid.
				</p>
				<br />
				<p>Boycott them. There are many alternative and better companies to buy from.</p>
				<br />
				<p>Call them out. Urge them to stop.</p>
			</IndexCard>
		</div>
	</div>

	<div class="grid place-items-center mt-12 lg:flex lg:justify-between lg:mt-24">
		<div class="grid place-items-center lg:mr-8">
			<IndexCard linkPath="news" linkText="OFFICIAL NEWS">
				<p>
					Putin's regime is spreading a massive amount of misinformation inside and outside of
					Russia.
				</p>
				<br />
				<p>Don't believe it.</p>
				<br />
				<p>Find multiple resources to inform yourself and try to break the bubble of fake news.</p>
			</IndexCard>
		</div>
		<img src="ua_support.svg" alt="Support Ukraine" class="mt-12 h-64 lg:h-96 lg:mt-0" />
	</div>
</div>
