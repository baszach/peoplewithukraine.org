<script>
	import WebpageIcon from './components/WebpageIcon.svelte';
	import FacebookIcon from './components/FacebookIcon.svelte';
	import TwitterIcon from './components/TwitterIcon.svelte';
	import TelegramIcon from './components/TelegramIcon.svelte';
</script>

<svelte:head>
	<title>A few official news resources for the war in Ukraine.</title>
	<meta
		title="description"
		content="There is a huge amount of disinformation in this war. Please, always take your time to read
		multiple resources and verify images or videos."
	/>
</svelte:head>

<div style="max-width: 64rem; display: inline-block">
	<h1 class="text-center text-3xl font-bold text-accent-gray">NEWS RESOURCES</h1>
	<h3 class="text-xl mt-12 font-bold text-accent-gray">NEWSPAPERS</h3>
	<div class="md:flex mt-6" style="justify-content: space-between">
		<ul>
			<li class="flex">
				<span class="py-2">Kyiv Independent </span>
				<div class="flex">
					<a class="link p-2" target="_blank" href="https://kyivindependent.com/"><WebpageIcon /></a
					>
					<a class="link p-2" target="_blank" href="https://www.facebook.com/kyivindependent"
						><FacebookIcon /></a
					>
					<a class="link p-2" target="_blank" href="https://twitter.com/kyivindependent"
						><TwitterIcon /></a
					>
				</div>
			</li>
			<li class="flex">
				<span class="py-2">Hromadske </span>
				<div class="flex">
					<a class="link p-2" target="_blank" href="https://en.hromadske.ua/"><WebpageIcon /></a>
					<a
						class="link p-2"
						target="_blank"
						href="https://www.facebook.com/HromadskeInternational/"><FacebookIcon /></a
					>
					<a class="link p-2" target="_blank" href="https://twitter.com/Hromadske"
						><TwitterIcon /></a
					>
				</div>
			</li>
		</ul>
		<img src="ua_news.svg" alt="News" class="h-24 mt-8 md:mt-0" />
	</div>

	<div class="mt-12">
		<h3 class="text-xl font-bold text-accent-gray">GOVERNEMENT</h3>
		<div style="justify-content: space-between" class="md:flex mt-6">
			<ul>
				<li class="flex">
					<span class="py-2">Volodimr Zelenskiy, President of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://www.president.gov.ua/en"
							><WebpageIcon /></a
						>
						<a class="link p-2" target="_blank" href="https://www.facebook.com/zelenskiy.official"
							><FacebookIcon /></a
						>
						<a class="link p-2" target="_blank" href="https://twitter.com/ZelenskyyUa"
							><TwitterIcon /></a
						>
						<a class="link p-2" target="_blank" href="https://t.me/V_Zelenskiy_official"
							><TelegramIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2">Oleksii Reznikow, Minister of Defence of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/oleksiireznikov"
							><TwitterIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2">Ministery of Defence of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://www.facebook.com/modofukraine"
							><FacebookIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2">Dmytro Kuleba, Minister of Foreign Affairs of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/DmytroKuleba"
							><TwitterIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2">Ministery of Foreign Affairs of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/MFA_Ukraine"
							><TwitterIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2"
						>Myhkailo Podolyak, Adviser to the Head of the Office of President
					</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/Podolyak_M"
							><TwitterIcon /></a
						>
					</div>
				</li>
				<li class="flex">
					<span class="py-2">Parliament of Ukraine </span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/ua_parliament"
							><TwitterIcon /></a
						>
						<a class="link p-2" target="_blank" href="https://t.me/verkhovnaradaofukraine"
							><TelegramIcon /></a
						>
					</div>
				</li>
			</ul>
			<img src="ua_politicians.svg" alt="Government" class="h-24 mt-8 md:mt-0" />
		</div>
	</div>
</div>
