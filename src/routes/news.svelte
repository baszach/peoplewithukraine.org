<script>
	import WebpageIcon from "./components/WebpageIcon.svelte";
	import FacebookIcon from "./components/FacebookIcon.svelte";
	import TwitterIcon from "./components/TwitterIcon.svelte";
	import TelegramIcon from "./components/TelegramIcon.svelte";
</script>

<div>
	<h1 class="text-3xl font-bold text-accent-gray">NEWS RESOURCES</h1>
	<div class="flex mt-8">
		<div class="mr-16">
			<h3 class="text-xl font-bold text-accent-gray">NEWSPAPERS</h3>
			<ul>
				<li class="flex">
					<span class="p-2">Kyiv Independent -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://kyivindependent.com/"><WebpageIcon></WebpageIcon></a>
						<a class="link p-2" target="_blank" href="https://www.facebook.com/kyivindependent"><FacebookIcon></FacebookIcon></a>
						<a class="link p-2" target="_blank" href="https://twitter.com/kyivindependent"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Hromadske -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://en.hromadske.ua/"><WebpageIcon></WebpageIcon></a>
						<a class="link p-2" target="_blank" href="https://www.facebook.com/HromadskeInternational/"><FacebookIcon></FacebookIcon></a>
						<a class="link p-2" target="_blank" href="https://twitter.com/Hromadske"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
			</ul>
		</div>
		<img src="ua_news.svg" alt="People" class="h-24" />
	</div>

	<div class="flex mt-8">
		<div class="mr-16">
			<h3 class="text-xl font-bold text-accent-gray">GOVERNEMENT</h3>
			<ul>
				<li class="flex">
					<span class="p-2">Volodimr Zelenskiy, President of Ukraine -</span>
					<div class="flex">
						<a></a>
						<a class="link p-2" target="_blank" href="https://www.president.gov.ua/en"><WebpageIcon></WebpageIcon></a>
						<a class="link p-2" target="_blank" href="https://www.facebook.com/zelenskiy.official"><FacebookIcon></FacebookIcon></a>
						<a class="link p-2" target="_blank" href="https://twitter.com/ZelenskyyUa"><TwitterIcon></TwitterIcon></a>
						<a class="link p-2" target="_blank" href="https://t.me/V_Zelenskiy_official"><TelegramIcon></TelegramIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Oleksii Reznikow, Minister of Defence of Ukraine -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/oleksiireznikov"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Ministery of Defence of Ukraine -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://www.facebook.com/modofukraine"><FacebookIcon></FacebookIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Dmytro Kuleba, Minister of Foreign Affairs of Ukraine -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/DmytroKuleba"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Ministery of Foreign Affairs of Ukraine -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/MFA_Ukraine"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Myhkailo Podolyak, Adviser to the Head of the Office of President -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/Podolyak_M"><TwitterIcon></TwitterIcon></a>
					</div>
				</li>
				<li class="flex">
					<span class="p-2">Parliament of Ukraine -</span>
					<div class="flex">
						<a class="link p-2" target="_blank" href="https://twitter.com/ua_parliament"><TwitterIcon></TwitterIcon></a>
						<a class="link p-2" target="_blank" href="https://t.me/verkhovnaradaofukraine"><TelegramIcon></TelegramIcon></a>
					</div>
				</li>
			</ul>
		</div>
		<img src="ua_politicians.svg" alt="People" class="h-24" />
	</div>

	<div class="flex mt-8">
		<div class="mr-16">
			<h3 class="text-xl font-bold text-accent-gray">PEOPLE & SOCIAL MEDIA</h3>
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
			</ul>
		</div>
		<img src="ua_people.svg" alt="People" class="h-24" />
	</div>
</div>
