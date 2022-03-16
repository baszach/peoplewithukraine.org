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
		{ id: 40, name: 'Crédit Agricole', info: '', logo: 'credit_agricole.jpeg', stillEvil: true },
		{ id: 41, name: 'Johnson & Johnson', info: '', logo: 'johnson.jpeg', linkedin:'https://www.linkedin.com/company/johnson-&-johnson/posts/?feedView=all', stillEvil: true },
		{ id: 42, name: 'Whirlpool corporation', info: '', logo: 'whirlpool.jpeg', linkedin:'https://www.linkedin.com/company/whirlpool-corporation/posts/?feedView=all', stillEvil: true },
		{ id: 43, name: 'Electrolux', info: '', logo: 'electrolux.jpeg', linkedin:'https://www.linkedin.com/company/electrolux/posts/?feedView=all', stillEvil: true },
		{ id: 44, name: 'Ariston Group', info: 'Calorex, NTI, HTP, Chaffoteaux, ATAG, Racold as well as Thermowatt and Ecoflam', logo: 'ariston.jpeg', linkedin:'https://www.linkedin.com/company/ariston-group/posts/?feedView=all', stillEvil: true },
		{ id: 45, name: 'The Kraft Heinz Company',
			children:[
				{id : 46, name: "Kraft", logo: "kraft_heinz/kraft.png", stillEvil: true},
				{id : 47, name: "Heinz", logo: "kraft_heinz/heinz.png", stillEvil: true},
				{id : 48, name: "Oscar Mayer", logo: "kraft_heinz/oscar_mayer.png", stillEvil: true},
				{id : 49, name: "Capri Sun", logo: "kraft_heinz/capri_sun.png", stillEvil: true},
				{id : 50, name: "Philadelphia", logo: "kraft_heinz/philadelphia.png", stillEvil: true}
			],
			info: 'Lunchables, Velveeta, Planters, Maxwell House, Ore-Ida, Kool-Aid, Jell-O, Primal Kitchen, and Classico',
			logo: 'kraft_heinz.jpeg', linkedin:'https://www.linkedin.com/company/the-kraft-heinz-company/posts/?feedView=all', stillEvil: true },
		{ id: 31, name: 'Mondelez', info: '', logo: '',
			children: [
				{id : 60, name: "Milka", logo: "mondelez/milka.png", stillEvil: true},
				{id : 61, name: "Toblerone", logo: "mondelez/toblerone.png", stillEvil: true},
				{id : 62, name: "Oreo", logo: "mondelez/oreo.png", stillEvil: true},
				{id : 63, name: "Belvita", logo: "mondelez/belvita.png", stillEvil: true},
				{id : 64, name: "Côte d'Or", logo: "mondelez/cote.png", stillEvil: true},
				{id : 65, name: "Halls", logo: "mondelez/halls.png", stillEvil: true},
			],
			stillEvil: true }, // Unlike other grocery brands it licenses from Kraft, Mondelez owns the rights to the Philadelphia brand everywhere except Canada, the U.S. and the Caribbean.
		{ id: 5, name: 'Auchan', info: '', logo: 'auchan.jpeg', stillEvil: true },
		{ id: 29, name: 'Metro', info: '', logo: 'metro.jpeg', stillEvil: true },
		{ id: 26, name: 'Leroy Merlin', info: '', logo: 'leroy_merlin.jpeg', linkedin: 'https://www.linkedin.com/company/leroy-merlin/posts/?feedView=all', stillEvil: true },
		{ id: 27, name: 'LG Electronics', info: '', logo: 'lg.jpeg', stillEvil: true },
		{ id: 36, name: 'Pirelli', info: '', logo: 'pirelli.jpeg',  area:'tyres', stillEvil: true },
		{ id: 6, name: 'Authentic Brands Group', info: 'https://www.authenticbrands.com/',
			children: [
				{id : 51, name: "Forever 21", logo: "authentic_brands/forever_21.png", stillEvil: true},
				{id : 52, name: "Reebok", logo: "authentic_brands/reebok.png", stillEvil: true},
				{id : 53, name: "Juicy Couture", logo: "authentic_brands/juicy_couture.png", stillEvil: true},
			],
			linkedin: 'https://www.linkedin.com/company/abg_nyc/posts/?feedView=all',
			logo: '', stillEvil: true },
		{ id: 10, name: 'Bosch', info: '', logo: '', stillEvil: true },
		{ id: 4, name: 'Asus', info: '', logo: '', stillEvil: true },
		{ id: 15, name: 'Decathlon', info: '', logo: '', stillEvil: true },
		{ id: 39, name: 'Subway', info: '', logo: '', stillEvil: true },
		{ id: 35, name: 'Oriflame Cosmetics', info: '', logo: '', linkedin:'https://www.linkedin.com/company/oriflame/posts/?feedView=all', stillEvil: true },
			//for the companies over this line create pics + for groups?

		{ id: 0, name: 'AbbVie', info: '', logo: '', area: 'medicine', stillEvil: true },
		{ id: 1, name: 'Accor', info: '', logo: '', stillEvil: true },
		{ id: 2, name: 'Air Liquide', info: '', logo: '', stillEvil: true },
		{ id: 3, name: 'Air Products', info: '', logo: '', area: 'gas', stillEvil: true },
		{ id: 7, name: 'Baker Hughes', info: '', logo: '', area: 'gas', stillEvil: true },
		{ id: 8, name: 'Baker Tilley', info: '', logo: '', stillEvil: true },
		{ id: 9, name: 'BBDO Group', info: '', logo: '', area: 'advertising', stillEvil: true },
		{ id: 11, name: 'Cargill', info: '', logo: 'cargill.png', area: 'agriculture', linkedin: 'https://www.linkedin.com/company/cargill/posts/?feedView=all', stillEvil: true },
		{ id: 12, name: 'Citrix', info: '', logo: '', area: 'software', linkedin: 'https://www.linkedin.com/company/citrix/posts/?feedView=all', stillEvil: true }, //suspended? linkedin
		{ id: 13, name: 'Cloudflare', info: '', logo: 'cloudfare.png', area: 'internet', stillEvil: true },
		{ id: 14, name: 'DDB', info: '', logo: 'ddb.png', area:'advertising', stillEvil: true },
		{ id: 16, name: 'Dentsu International', info: '', logo: 'dentsu.png', area:'advertising', stillEvil: true },
		{ id: 17, name: 'Focus Brands - Cinnabon', info: '', logo: '', stillEvil: true },
		{ id: 18, name: 'General Mills', info: '', logo: '',
			children: [
				{id : 54, name: "Häagen-Dazs", logo: "general_mills/haagen.png", stillEvil: true},
				{id : 55, name: "Lucky Charms", logo: "general_mills/lucky_charms.png", stillEvil: true},
				{id : 56, name: "Cheerios", logo: "general_mills/cheerios.png", stillEvil: true},
			],
			stillEvil: true },
		{ id: 33, name: 'Natura and Company', info: '', logo: '', area:'cosmetics', linkedin: 'https://www.linkedin.com/company/the-body-shop/posts/?feedView=all',
			children:[
				{id : 57, name: "Avon", logo: "natura_and_co/avon.png", stillEvil: true},
				{id : 58, name: "The Body Shop", logo: "natura_and_co/the_body_shop.png", stillEvil: true}, //lied about closing
				{id : 59, name: "Aesop", logo: "natura_and_co/aesop.png", stillEvil: true},
			],
			stillEvil: true },
		{ id: 19, name: 'Greif', info: '', logo: 'greif.png', area: 'packaging', stillEvil: true },
		{ id: 20, name: 'Gruma', info: 'tortillas', logo: '', area:'food', stillEvil: true },
		{ id: 21, name: 'Halliburton', info: '', logo: '', area:'petroleum', stillEvil: true },
		{ id: 22, name: 'International Paper', info: '', logo: '', stillEvil: true },

		//fat advertising companies
		{ id: 23, name: 'Interpublic Group', info: '', logo: '', area:'advertising', stillEvil: true },
		{ id: 37, name: 'Publicis Groupe', info: '', logo: 'interpublic/publics.png', area:'advertising',
			children: [
				{ id: 25, name: 'Leo Burnett', info: '', logo: 'interpublic/leo_burnett.jpeg', linkedin:'https://www.linkedin.com/company/leo-burnett/posts/?feedView=all', stillEvil: true }
			],stillEvil: true},
		{ id: 34, name: 'Omnicom Media Group', info: '', logo: 'intepublic/omnicom.png', area:'advertising', stillEvil: true },

		{ id: 24, name: 'IPG Photonics', info: '', logo: '', area:'photonics', stillEvil: true },
		{ id: 28, name: 'Linde', info: '', logo: '', stillEvil: true },
		{ id: 30, name: 'Mettler Toledo', info: '', logo: '', area:'scientific', stillEvil: true },
		{ id: 32, name: 'Nalco', info: '', logo: 'nalco.png', area:'chemicals', stillEvil: true },
		{ id: 38, name: 'Schlumberger', info: '', logo: 'schlumberger.png', area:'oil', stillEvil: true }
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
				<div style="display: grid; grid-template-columns: repeat(auto-fill, 18rem); grid-gap: 2em">
				{#each killers as killer}
					{#if killer.stillEvil}
						<div>
							<p class="text-red-600 font-bold">{killer.name}</p>
							<p>{killer.info}</p>
							<img src="/killers/{killer.logo}" class="" alt="" />

						{#if killer.children != null}
							<div style="display: grid; grid-template-columns: repeat(auto-fill, 8rem); grid-gap: 2em">
								{#each killer.children as child}
									<img src="/killers/{child.logo}" class="" alt="" style=""/>
								{/each}
							</div>
						{/if}
						</div>
					{/if}
				{/each}
				</div>
			</ul>
		</div>
	{/if}

	<div class="grid place-items-center mt-16 lg:flex lg:justify-between">
		<img src="ua_img_3.jpg" alt="Stop Putin" class="h-96 object-cover lg:mr-8" />
		<img src="ua_img_2.jpg" alt="Stop War" class="h-96 mt-8  object-cover lg:mt-0" />
	</div>
</div>
