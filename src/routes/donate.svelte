<script>
	import ActHeader from './components/ActHeader.svelte';
	import ActBottom from './components/ActBottom.svelte';
</script>

<svelte:head>
	<title>Donate money and help Ukraine</title>
	<meta title="description" content="Here are sources to donate money to support Ukraine." />
</svelte:head>

<div>
	<div style="max-width: 64rem; display: inline-block">
		<ActHeader section="donate" />
		<h1 class="text-3xl font-bold text-accent-gray text-center">Donate</h1>
		<div class="mt-4 text-left">
			<p>
				By donating money you can help the Ukrainian people defend themselves against this invasion.
				The money is used for food, medicine, clothes and more. Details can be found in the sources
				below.
			</p>
			<p class="italic text-accent-gray">
				Some banks even ease the transfer of money to Ukrainian IBANs by removing commisions. Inform
				yourself at your financial institution.
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
	<ActBottom />
</div>
