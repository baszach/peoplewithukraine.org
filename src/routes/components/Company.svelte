<script>
	import LinkedInComponent from './LinkedInComponent.svelte';
	import FacebookIcon from './FacebookIcon.svelte';
	import TwitterIcon from './TwitterIcon.svelte';
	import InstagramIcon from './InstagramIcon.svelte';
	import { fade } from 'svelte/transition';
	import DownloadIcon from './DownloadIcon.svelte';

	export let killer;
	export let onlyLogos = false;
	let flipped = false;
	let hovering = false;

	let icon_size = !onlyLogos && (killer.pic != null || killer.children != null) ? '2' : '1.5';

	function hover() {
		if (!hasOtherSide()) return;
		if (!flipped) hovering = true;
	}

	function unhover() {
		if (!hasOtherSide()) return;
		if (!flipped) hovering = false;
	}

	function click() {
		if (!hasOtherSide()) return;
		flipped = !flipped;
	}

	function hasOtherSide() {
		return (
			killer.linkedin != null ||
			killer.facebook != null ||
			killer.twitter != null ||
			killer.instagram != null ||
			killer.all_brands != null
		);
	}
</script>

<div class="company-holder" style="height: 100%;">
	<div
		class="grid place-items-center bg-accent-yellow hover:cursor-pointer {killer.children != null
			? 'companies-group-image-holder'
			: 'companies-image-holder'}"
		on:mouseenter={hover}
		on:mouseleave={unhover}
		on:click={click}
	>
		<img
			src="/killers/{killer.pic != null && !onlyLogos ? killer.pic : killer.logo}"
			alt=""
			loading="lazy"
			class="company-image px-2"
			style="width: 100%; z-index: {flipped ? '10' : '0'}; opacity: {flipped ? '0%' : '100%'}"
		/>
		<!--		<DownloadIcon style="z-index: {flipped ? '10' : '0'}; opacity: {flipped ? '0%' : '100%'}"-->
		<!--		></DownloadIcon>-->
		{#if hovering && !flipped}
			<div
				style="z-index: 20; grid-area: 1/1/1/1; height: 100%; width: 100%; opacity: 40%"
				class="bg-white"
				in:fade
			/>
		{/if}

		{#if flipped}
			<div
				class="p-3 text-left bg-slate-200 grid items-center"
				style="height: 100%; width: 100%; grid-area: 1/1/1/1;"
			>
				<div class="">
					<div class="p-2 m-1 font-bold inline-block bg-white rounded-lg">{killer.name}</div>
					{#if killer.all_brands != null}
						<div>
							<a
								class="z-40 relative link p-2 m-1 font-bold bg-ukraine-yellow rounded-lg inline-block"
								target="_blank"
								href={killer.all_brands}>view all brands</a
							>
						</div>
					{/if}
					<div class="p-2 m-1 bg-ukraine-blue text-white font-bold rounded-lg inline-block">
						{killer.area}
					</div>
					<div class="flex">
						{#if killer.linkedin != null}<a
								class="link p-1"
								target="_blank"
								href={killer.linkedin}
								style="z-index: 40"><LinkedInComponent size={icon_size} /></a
							>{/if}
						{#if killer.facebook != null}<a
								class="link p-1"
								target="_blank"
								href={killer.facebook}
								style="z-index: 40;"><FacebookIcon size={icon_size} /></a
							>{/if}
						{#if killer.twitter != null}<a
								class="link p-1"
								target="_blank"
								href={killer.twitter}
								style="z-index: 40;"><TwitterIcon size={icon_size} /></a
							>{/if}
						{#if killer.instagram != null}<a
								class="link p-1"
								target="_blank"
								href={killer.instagram}
								style="z-index: 40;"><InstagramIcon size={icon_size} /></a
							>{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>

	{#if killer.children != null}
		<div
			class="overflow-auto place-items-center companies-children-grid bg-slate-200"
			style="max-height: 35rem"
		>
			{#each killer.children as child}
				<img src="/killers/{child.logo}" alt="" loading="lazy" style="" />
			{/each}
		</div>
	{/if}
</div>
