<script>
	import Ranking from './components/Ranking.svelte';
	import BoycottComponent from './components/BoycottComponent.svelte';
</script>

<svelte:head>
	<title>Names of companies still working in Russia</title>
	<meta
		title="description"
		content="Quickly find names of companies that continue operating in Russia. Boycott them or contact them via social media."
	/>
</svelte:head>

<div style="text-align: center">
	<div style="max-width: 64rem; display: inline-block">
		<BoycottComponent section="names" />
	</div>
	<Ranking logos={false} />
</div>
