<script>
	let donateSection = false;
	let actSection = false;
	let boycottSection = true;

	function openDonateSection() {
		donateSection = true;
		actSection = false;
		boycottSection = false;
	}

	function openActSection() {
		donateSection = false;
		actSection = true;
		boycottSection = false;
	}

	function openBoycottSection() {
		donateSection = false;
		actSection = false;
		boycottSection = true;
	}

	const killers = [
		{ id: 0, name: 'AbbVie', info: '', logo: '', stillEvil: true },
		{ id: 1, name: 'Accor', info: '', logo: '', stillEvil: true },
		{ id: 2, name: 'Air Liquide', info: '', logo: '', stillEvil: true },
		{ id: 3, name: 'Air Products', info: '', logo: '', stillEvil: true },
		{ id: 4, name: 'Asus', info: '', logo: '', stillEvil: true },
		{ id: 5, name: 'Auchan', info: '', logo: '', stillEvil: true },
		{ id: 6, name: 'Authentic Brands Group - Reebok', info: '', logo: '', stillEvil: true },
		{ id: 7, name: 'Baker Hughes', info: '', logo: '', stillEvil: true },
		{ id: 8, name: 'Baker Tilley', info: '', logo: '', stillEvil: true },
		{ id: 9, name: 'BBDO Group', info: '', logo: '', stillEvil: true },
		{ id: 10, name: 'Bosch', info: '', logo: '', stillEvil: true },
		{ id: 11, name: 'Cargill', info: '', logo: '', stillEvil: true },
		{ id: 12, name: 'Citrix', info: '', logo: '', stillEvil: true },
		{ id: 13, name: 'Cloudflare', info: '', logo: '', stillEvil: true },
		{ id: 14, name: 'DDB', info: '', logo: '', stillEvil: true },
		{ id: 15, name: 'Decathlon', info: '', logo: '', stillEvil: true },
		{ id: 16, name: 'Dentsu International', info: '', logo: '', stillEvil: true },
		{ id: 17, name: 'Focus Brands - Cinnabon', info: '', logo: '', stillEvil: true },
		{ id: 18, name: 'General Mills', info: '', logo: '', stillEvil: true },
		{ id: 19, name: 'Greif', info: '', logo: '', stillEvil: true },
		{ id: 20, name: 'Gruma', info: '', logo: '', stillEvil: true },
		{ id: 21, name: 'Halliburton', info: '', logo: '', stillEvil: true },
		{ id: 22, name: 'International Paper', info: '', logo: '', stillEvil: true },
		{ id: 23, name: 'Interpublic Group', info: '', logo: '', stillEvil: true },
		{ id: 24, name: 'IPG Photonics', info: '', logo: '', stillEvil: true },
		{ id: 25, name: 'Leo Burnett', info: '', logo: '', stillEvil: true },
		{ id: 26, name: 'Leroy Merlin', info: '', logo: '', stillEvil: true },
		{ id: 27, name: 'LG Electronics', info: '', logo: '', stillEvil: true },
		{ id: 28, name: 'Linde', info: '', logo: '', stillEvil: true },
		{ id: 29, name: 'Metro', info: '', logo: '', stillEvil: true },
		{ id: 30, name: 'Mettler Toledo', info: '', logo: '', stillEvil: true },
		{ id: 31, name: 'Mondelez - Nabisco', info: '', logo: '', stillEvil: true },
		{ id: 32, name: 'Nalco', info: '', logo: '', stillEvil: true },
		{ id: 33, name: 'Natura and Company', info: '', logo: '', stillEvil: true },
		{ id: 34, name: 'Omnicom Media Group', info: '', logo: '', stillEvil: true },
		{ id: 35, name: 'Oriflame Cosmetics', info: '', logo: '', stillEvil: true },
		{ id: 36, name: 'Pirelli', info: '', logo: '', stillEvil: true },
		{ id: 37, name: 'Publicis Groupe', info: '', logo: '', stillEvil: true },
		{ id: 38, name: 'Schlumberger', info: '', logo: '', stillEvil: true },
		{ id: 39, name: 'Subway', info: '', logo: '', stillEvil: true }
	];
</script>

<div class="py-16">
	<div class="grid place-items-center sm:flex sm:justify-between">
		<button
			on:click={openDonateSection}
			class="py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
        {donateSection ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Donate
		</button>
		<button
			on:click={openActSection}
			class="mt-4 sm:mt-0 mx-4 py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
        {actSection ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Act
		</button>
		<button
			on:click={openBoycottSection}
			class="mt-4 sm:mt-0 py-4 px-8 rounded-2xl text-3xl font-bold text-accent-gray bg-ukraine-yellow
        {boycottSection ? 'opacity-50 cursor-not-allowed' : ''}"
		>
			Boycott
		</button>
	</div>
	{#if donateSection}
		<div class="mt-16">
			<h1 class="text-3xl font-bold text-accent-gray text-center">Donate</h1>
			<div class="mt-4">
				<p>
					By donating money you can help the Ukrainian people defend themselves against this
					invasion. The money is used for food, medicine clothes and more. Details can be found in
					the sources below.
				</p>
				<p class="italic text-accent-gray">
					Some banks even ease the transfer of money to Ukrainian IBANs by removing commisions.
					Inform yourself at your financial institution.
				</p>

				<div class="mt-8">
					<h3 class="font-bold">
						Ministry of Defense of Ukraine - Support the Armed Forces of Ukraine (official)
					</h3>
					<a
						href="https://bank.gov.ua/en/about/support-the-armed-forces"
						target="_blank"
						class="link"
					>
						bank.gov.ua/en/about/support-the-armed-forces
					</a>
					<p><strong>Type:</strong> Bank transfer</p>
					<p><strong>Info:</strong> There are IBANs for multiple currencies (e.g. USD or EUR)</p>
				</div>
				<div class="mt-8">
					<h3 class="font-bold">
						Ministry of Social Policy of Ukraine - Humanitarian Aid (official)
					</h3>
					<a
						href="https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine"
						target="_blank"
						class="link"
					>
						bank.gov.ua/en/about/humanitarian-aid-to-ukraine
					</a>
					<p><strong>Type:</strong> Bank transfer</p>
					<p><strong>Info:</strong> There are IBANs for multiple currencies (e.g. USD or EUR)</p>
				</div>
				<div class="mt-8">
					<h3 class="font-bold">
						Ministry of Digital Transformation of Ukraine - Army & Humanitarian Aid (official)
					</h3>
					<a href="https://donate.thedigital.gov.ua/" target="_blank" class="link">
						donate.thedigital.gov.ua
					</a>
					<p>
						<strong>Type:</strong> Many cryptocurrencies to choose from (e.g. Bitcoin or Etherum)
					</p>
				</div>
				<div class="mt-8">
					<h3 class="font-bold">Come Back Alive - Support the Armed Forces of Ukraine (NGO)</h3>
					<a href="https://www.comebackalive.in.ua/donate" target="_blank" class="link">
						bank.gov.ua/en/about/humanitarian-aid-to-ukraine
					</a>
					<p><strong>Type:</strong> Multiple ways of transfer (Fondy, SWIFT or Crypto)</p>
					<p>
						<strong>Info:</strong> The "Come Back Alive Foundation" claims that donations are used for
						defensive gear only, not lethal equipment
					</p>
				</div>
			</div>
		</div>
	{:else if actSection}
		<div class="mt-16">
			<h1 class="text-3xl font-bold text-accent-gray text-center">Act</h1>
			<div>
				<p class="mt-4">
					<strong>Share verified news:</strong> As this war is fought not only with weapons but also
					with information, it is very important to share information and stop the spreading of fake
					news. Try to report abusive, hateful or false content on social media platforms like Twitter.
				</p>
				<p class="mt-4">
					<strong>Join organizations and help groups:</strong> There are many different types of groups
					that help. They may collect food, blankets and other supply for Ukraine. Other groups are helping
					arriving refugees at airports and train stations of big cities (e.g. Berlin or Krakow).
				</p>
				<p class="mt-4">
					<strong>Find creative solutions:</strong> Many people use the knowledge of their professions
					to support Ukraine. IT specialists can help with cyberdefense, logistic experts can help with
					transportation of supply to Ukraine, photographers can take pictures of demonstrations, designers
					can make supportive art and influencers can call out Russia for their actions and share the
					truth. There’s no limit to human creativity.
				</p>
				<p class="mt-4">
					<strong>Reach out to politicians and companies:</strong> In the last days many companies have
					cut ties with Russia or temporarily stopped operating businesses there. It is important that
					many people raise their voice to hurt Russia’s economy. Write letters, emails or comments to
					companies and politicians and urge them to reconsider their views (e.g. drawing back from Russia).
				</p>
				<p class="mt-4">
					<strong>Demonstrate:</strong> Apply pressure on Russia on a global scale. Call for action of
					politics and companies. Help organizing peace protests and other actions. We can't stay quiet
					in these times.
				</p>
			</div>
			<p class="mt-4 font-bold">
				Visit the following links to other organizations and initiatives and share them:
			</p>
			<ul>
				<li>
					&bull; Information for Ukrainian refugees for many countries under
					<a href="https://ukraina.guide/" target="_blank" class="link"> ukraina.guide </a>.
				</li>
				<li>
					&bull; How to help Ukraine
					<a href="https://supportukrainenow.org/" target="_blank" class="link">
						supportukrainenow.org
					</a> (with country specific tips).
				</li>
				<li>
					&bull; Find and share events against the Russian invasion of Ukraine under
					<a href="https://www.stopputin.net/" target="_blank" class="link"> stopputin.net </a>.
				</li>
				<li>
					&bull; Join the Internation Legion of Defense of Ukraine
					<a href="https://fightforua.org/" target="_blank" class="link"> fightforua.org </a>.
				</li>
				<li>
					&bull; Register and find peace protest
					<a href="https://standwithukraine.live/" target="_blank" class="link">
						standwithukraine.live
					</a>.
				</li>
			</ul>
		</div>
	{:else if boycottSection}
		<div class="mt-16">
			<h1 class="text-3xl font-bold text-accent-gray text-center">Boycott</h1>
			<p class="mt-4">
				Putin's war drains millions of dollars every minute. Upholding business operations in Russia
				funds this war. This has to stop immediately. Boycott companies that continue creating value
				for Putin. Contact the companies via social media like LinkedIn or Twitter and urge them to
				stop.
			</p>
			<ul class="mt-8">
				<p>Below is a list of some contributors to war (as of 15th of March 2022):</p>
				{#each killers as killer}
					{#if killer.stillEvil}
						<li>
							<p class="text-red-600 font-bold">{killer.name}</p>
							<p>{killer.info}</p>
							<img src="" alt="" />
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}

	<div class="grid place-items-center mt-16 lg:flex lg:justify-between">
		<img src="ua_img_3.jpg" alt="Stop Putin" class="h-96 object-cover lg:mr-8" />
		<img src="ua_img_2.jpg" alt="Stop War" class="h-96 mt-8  object-cover lg:mt-0" />
	</div>
</div>
