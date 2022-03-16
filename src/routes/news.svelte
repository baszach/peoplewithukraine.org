<script>
	import TwitterIcon from "./components/TwitterIcon.svelte";
	import WebpageIcon from "./components/WebpageIcon.svelte";
	import FacebookIcon from "./components/FacebookIcon.svelte";
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
		<img src="ua_news.svg" alt="People" class="h-24"/>
	</div>

	<div class="flex mt-8">
		<div class="mr-16">
			<h3 class="text-xl font-bold text-accent-gray">GOVERNEMENT</h3>
			<ul>
				<li>Volodimr Zelenskiy the President of Ukraine
					<a class="link p-2" target="_blank" href="https://www.facebook.com/V_Zelenskiy_official/">f</a>
					<a class="link p-2" target="_blank" href="https://twitter.com/ZelenskyyUa"><TwitterIcon></TwitterIcon></a>
				</li>
				<li>Minister of Defence of Ukraine Oleksii Reznikow
					<a class="link p-2" target="_blank" href="https://twitter.com/oleksiireznikov"><TwitterIcon></TwitterIcon></a>
				</li>
				<li>Dmytro Kuleba Minister of Foreign Affairs of Ukraine
					<a class="link p-2" target="_blank" href=">https://twitter.com/DmytroKuleba"><TwitterIcon></TwitterIcon></a>
					<a class="link p-2" target="_blank" href=">https://twitter.com/MFA_Ukraine">@MFA_Ukraine</a>
				</li>

				<li>Podolyak doubled in ru en ua
					<a class="link p-2" target="_blank" href="https://twitter.com/Podolyak_M">
						<TwitterIcon></TwitterIcon>
					</a>
				</li>
				<li>Parliament of Ukraine
					<a class="link p-2" target="_blank" href="https://twitter.com/ua_parliament"><TwitterIcon></TwitterIcon></a>
					<a class="link p-2" target="_blank" href="https://t.me/verkhovnaradaofukraine">@verkhovnaradaofukraine</a>
				</li>
			</ul>
		</div>
		<img src="ua_politicians.svg" alt="People" class="h-24"/>
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
		<img src="ua_people.svg" alt="People" class="h-24"/>
	</div>
</div>
