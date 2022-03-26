<script>
	import Ranking from './components/Ranking.svelte';
	import BoycottComponent from './components/BoycottComponent.svelte';
</script>

<svelte:head>
	<title>Logos of companies still working in Russia</title>
	<meta
		title="description"
		content="Quickly find logos of companies that continue operating in Russia. Boycott them or contact them via social media."
	/>
</svelte:head>

<div style="text-align: center">
	<div style="max-width: 64rem; display: inline-block">
		<BoycottComponent section="logos" />
	</div>
	<Ranking logos={true} />
</div>
