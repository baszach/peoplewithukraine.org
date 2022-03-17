<script>
    	const killers = [
		{ id: 40, name: 'Crédit Agricole', info: '', pic: 'credit_agricole.jpeg', stillEvil: true },
		{ id: 41, name: 'Johnson & Johnson', info: '', pic: 'johnson.jpeg', linkedin:'https://www.linkedin.com/company/johnson-&-johnson/posts/?feedView=all', stillEvil: true },
		{ id: 42, name: 'Whirlpool corporation', info: '', pic: 'whirlpool.jpeg', linkedin:'https://www.linkedin.com/company/whirlpool-corporation/posts/?feedView=all', stillEvil: true },
		{ id: 43, name: 'Electrolux', info: '', pic: 'electrolux.jpeg', linkedin:'https://www.linkedin.com/company/electrolux/posts/?feedView=all', stillEvil: true },
		{ id: 44, name: 'Ariston Group', info: 'Calorex, NTI, HTP, Chaffoteaux, ATAG, Racold as well as Thermowatt and Ecoflam', pic: 'ariston.jpeg', linkedin:'https://www.linkedin.com/company/ariston-group/posts/?feedView=all', stillEvil: true },
		{ id: 45, name: 'The Kraft Heinz Company',
			children:[
				{id : 46, name: "Kraft", logo: "kraft_heinz/kraft.png", stillEvil: true},
				{id : 47, name: "Heinz", logo: "kraft_heinz/heinz.png", stillEvil: true},
				{id : 48, name: "Oscar Mayer", logo: "kraft_heinz/oscar_mayer.png", stillEvil: true},
				{id : 49, name: "Capri Sun", logo: "kraft_heinz/capri_sun.png", stillEvil: true},
				{id : 50, name: "Philadelphia", logo: "kraft_heinz/philadelphia.png", stillEvil: true}
			],
			info: 'Lunchables, Velveeta, Planters, Maxwell House, Ore-Ida, Kool-Aid, Jell-O, Primal Kitchen, and Classico',
			pic: 'kraft_heinz.jpeg', linkedin:'https://www.linkedin.com/company/the-kraft-heinz-company/posts/?feedView=all', stillEvil: true },
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
		{ id: 5, name: 'Auchan', info: '', pic: 'auchan.jpeg', stillEvil: true },
		{ id: 29, name: 'Metro', info: '', pic: 'metro.jpeg', stillEvil: true },
		{ id: 26, name: 'Leroy Merlin', info: '', pic: 'leroy_merlin.jpeg', linkedin: 'https://www.linkedin.com/company/leroy-merlin/posts/?feedView=all', stillEvil: true },
		{ id: 27, name: 'LG Electronics', info: '', pic: 'lg.jpeg', stillEvil: true },
		{ id: 36, name: 'Pirelli', info: '', pic: 'pirelli.jpeg',  area:'tyres', stillEvil: true },
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
		{ id: 20, name: 'Gruma', info: 'tortillas', logo: 'gruma.png', area:'food', stillEvil: true },
		{ id: 21, name: 'Halliburton', info: '', logo: 'halliburton.png', area:'petroleum', stillEvil: true },
		{ id: 22, name: 'International Paper', info: '', logo: 'paper.png', area:'paper', stillEvil: true },

		//fat advertising companies
		{ id: 23, name: 'Interpublic Group', info: '', logo: '', area:'advertising', stillEvil: true },
		{ id: 37, name: 'Publicis Groupe', info: '', logo: 'interpublic/publics.png', area:'advertising',
			children: [
				{ id: 25, name: 'Leo Burnett', info: '', logo: 'interpublic/leo_burnett.jpeg', linkedin:'https://www.linkedin.com/company/leo-burnett/posts/?feedView=all', stillEvil: true }
			],stillEvil: true},
		{ id: 34, name: 'Omnicom Media Group', info: '', logo: 'intepublic/omnicom.png', area:'advertising', stillEvil: true },

		{ id: 24, name: 'IPG Photonics', info: '', logo: 'ipg.png', area:'photonics', stillEvil: true },
		{ id: 28, name: 'Linde', info: '', logo: 'linde.png', area:'gas/engineering', stillEvil: true },
		{ id: 30, name: 'Mettler Toledo', info: '', logo: 'mettler.png', area:'scientific', stillEvil: true },
		{ id: 32, name: 'Nalco', info: '', logo: 'nalco.png', area:'chemicals', stillEvil: true },
		{ id: 38, name: 'Schlumberger', info: '', logo: 'schlumberger.png', area:'oil', stillEvil: true }
	];
</script>

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
                <div class="bg-slate-200 py-2 rounded-md text-center h-max grid place-items-center">
                    <p class="text-red-600 font-bold text-xl">{killer.name}</p>
                    <p>{killer.info}</p>
                    {#if killer.pic != null}
                        <img src="/killers/{killer.pic}" alt="" class="mt-2 h-64 rounded-md"/>
                    {:else}
                        <img src="/killers/{killer.logo}" alt="" class="mt-2"/>
                    {/if}

                    {#if killer.children != null}
                        <div class="place-items-center" style="display: grid; grid-template-columns: repeat(auto-fill, 8rem); grid-gap: 2em">
                            {#each killer.children as child}
                                <img src="/killers/{child.logo}" alt="" class="h-16 w-auto"/>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        {/each}
        </div>
    </ul>
</div>