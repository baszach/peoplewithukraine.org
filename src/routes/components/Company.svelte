<script>
	import LinkedInComponent from './LinkedInComponent.svelte';
	import FacebookIcon from './FacebookIcon.svelte';
	import TwitterIcon from './TwitterIcon.svelte';
	import InstagramIcon from './InstagramIcon.svelte';
	import { fade } from 'svelte/transition';

	export let killer;
	let flipped = false;
	let hovering = false;

	function hover() {
		if (!flipped) hovering = true;
	}
	function unhover() {
		if (!flipped) hovering = false;
	}
	function click() {
		flipped = !flipped;
		hovering = !flipped;
	}
</script>

<div class="company-holder">
	<div
		style="display: inline-block;"
		class={killer.children != null ? 'companies-group-image-holder' : 'companies-image-holder'}
	>
		<div
			class="grid place-items-center hover:cursor-pointer"
			on:mouseenter={hover}
			on:mouseleave={unhover}
			on:click={click}
		>
			<img
				src="/killers/{killer.pic != null ? killer.pic : killer.logo}"
				alt=""
				loading="lazy"
				class="h-max company-image"
				style="opacity: {flipped ? '0%' : '100%'}"
			/>
			{#if hovering}
				<div
					style="z-index: 20; grid-area: 1/1/1/1; height: 100%; width: 100%; opacity: 40%"
					class="bg-white"
					in:fade
				/>
			{/if}

			<div
				class="p-6 text-left bg-background-color"
				style="height: 100%; width: 100%; grid-area: 1/1/1/1; opacity: {flipped
					? '100%'
					: '0%'}; min-height: {killer.pic != null ? '16rem' : '8rem'};"
			>
				<div class="p-2 m-1 font-bold inline-block bg-white rounded-lg">{killer.name}</div>
				{#if killer.all_brands != null}<div>
						<a
							class="link p-2 m-1 font-bold bg-ukraine-yellow rounded-lg inline-block"
							target="_blank"
							href={killer.all_brands}
							style="z-index: 40">view all brands</a
						>
					</div>{/if}
				<div class="p-2 m-1 bg-ukraine-blue text-white font-bold rounded-lg inline-block">
					{killer.area}
				</div>
				<div class="flex">
					{#if killer.linkedin != null}<a class="link p-2" target="_blank" href={killer.linkedin} style="z-index: 40"
							><LinkedInComponent /></a
						>{/if}
					{#if killer.facebook != null}<a class="link p-2" target="_blank" href={killer.facebook} style="z-index: 40"
							><FacebookIcon /></a
						>{/if}
					{#if killer.twitter != null}<a class="link p-2" target="_blank" href={killer.twitter} style="z-index: 40"
							><TwitterIcon /></a
						>{/if}
					{#if killer.instagram != null}<a class="link p-2" target="_blank" href={killer.instagram} style="z-index: 40"
							><InstagramIcon /></a
						>{/if}
				</div>
			</div>
		</div>
	</div>
	{#if killer.children != null}
		<div class="place-items-center companies-children-grid bg-background-color">
			{#each killer.children as child}
				<img src="/killers/{child.logo}" alt="" loading="lazy" style="" />
			{/each}
		</div>
	{/if}
</div>
