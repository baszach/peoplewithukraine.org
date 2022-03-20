<script>
	import LinkedInComponent from './LinkedInComponent.svelte';
	import FacebookIcon from './FacebookIcon.svelte';
	import TwitterIcon from './TwitterIcon.svelte';
	import InstagramIcon from './InstagramIcon.svelte';

	export let killer;
	let flipped = false;
</script>

<div class="company-holder" on:click={() => (flipped = !flipped)}>
	<div style="display: inline-block;" class="{killer.children != null ? 'companies-group-image-holder' : 'companies-image-holder'}">
			<div class="grid place-items-center mt-2">
				<img src="/killers/{killer.pic != null ? killer.pic : killer.logo}" alt="" loading="lazy" class="h-max" style="grid-area: 1/1/1/1; opacity: {flipped ? '0%' : '100%'}"/>

				<div class="p-6 text-left bg-background-color" style="height: 100%; width: 100%; grid-area: 1/1/1/1; opacity: {flipped ? '100%' : '0%'}; min-height: {killer.pic != null ? '16rem' : '8rem'};">
					<div class="p-2 font-bold inline-block bg-white rounded-lg">{killer.name}</div>
					{#if killer.all_brands != null}<div><a class="link p-2 font-bold bg-ukraine-yellow rounded-lg inline-block" target="_blank" href={killer.all_brands}
					>view all brands</a
					></div>{/if}
					<div class="p-2 bg-ukraine-blue text-white font-bold rounded-lg inline-block">{killer.area}</div>
					<div class="flex">
						{#if killer.linkedin != null}<a class="link p-2" target="_blank" href={killer.linkedin}
						><LinkedInComponent /></a
						>{/if}
						{#if killer.facebook != null}<a class="link p-2" target="_blank" href={killer.facebook}
						><FacebookIcon /></a
						>{/if}
						{#if killer.twitter != null}<a class="link p-2" target="_blank" href={killer.twitter}
						><TwitterIcon /></a
						>{/if}
						{#if killer.instagram != null}<a class="link p-2" target="_blank" href={killer.instagram}
						><InstagramIcon /></a
						>{/if}
					</div>
				</div>
			</div>
	</div>
	{#if killer.children != null}
		<div class="place-items-center companies-children-grid">
			{#each killer.children as child}
				<img src="/killers/{child.logo}" alt="" loading="lazy" style="" />
			{/each}
		</div>
	{/if}
</div>
