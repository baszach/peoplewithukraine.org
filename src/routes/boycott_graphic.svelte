<script>
	import war_contributors from '../../static/war_contributors.json';
	import Company from './components/Company.svelte';
	import BoycottComponent from './components/BoycottComponent.svelte';

	function hasOtherSide(killer) {
		return (
			killer.linkedin != null ||
			killer.facebook != null ||
			killer.twitter != null ||
			killer.instagram != null ||
			killer.all_brands != null
		);
	}
</script>

<svelte:head>
	<title>These companies continue business in Russia</title>
	<meta
		title="description"
		content="Many companies have found smart ways to either close businesses in Russia or evade paying taxes. These actions
		contribute to stopping the cruel war in Ukraine. The companies still paying taxes and supporting Russia... are listed here.
		Boycott them."
	/>
</svelte:head>

<div style="text-align: center">
	<div style="max-width: 64rem; display: inline-block">
		<BoycottComponent section="graphic" />
	</div>
	<ul class="mt-4">
		<div class="companies-group">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children != null}
					<Company {killer} />
				{/if}
			{/each}
		</div>
		<div class="mt-4 companies-with-pic">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null && killer.pic != null}
					<Company {killer} />
				{/if}
			{/each}
		</div>

		<div class="mt-4 companies-with-logo">
			{#each war_contributors as killer}
				{#if killer.stillEvil && killer.children == null && killer.pic == null && killer.logo != null && hasOtherSide(killer)}
					<div class="bg-slate-200" style="min-height: 12rem; min-width: 12rem;">
						<Company {killer} />
					</div>
				{/if}
			{/each}
		</div>
	</ul>
</div>
