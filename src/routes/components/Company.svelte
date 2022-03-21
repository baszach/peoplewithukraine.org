<script>
	import LinkedInComponent from './LinkedInComponent.svelte';
	import FacebookIcon from './FacebookIcon.svelte';
	import TwitterIcon from './TwitterIcon.svelte';
	import InstagramIcon from './InstagramIcon.svelte';
	import {fade} from 'svelte/transition';
	import DownloadIcon from "./DownloadIcon.svelte";

	export let killer;
	let flipped = false;
	let hovering = false;

	let icon_size = killer.pic != null || killer.children != null ? '2' : '1.5';

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

<div class="company-holder bg-slate-200" style="height: 100%;">
	<div
		class="grid place-items-center hover:cursor-pointer {killer.children != null
			? 'companies-group-image-holder'
			: 'companies-image-holder'}"
		on:mouseenter={hover}
		on:mouseleave={unhover}
		on:click={click}
	>
		<img
			src="/killers/{killer.pic != null ? killer.pic : killer.logo}"
			alt=""
			loading="lazy"
			class="company-image px-2"
			style="width: 100%; z-index: {flipped ? '10' : '0'}; opacity: {flipped ? '0%' : '100%'}"
		/>
<!--		<DownloadIcon style="z-index: {flipped ? '10' : '0'}; opacity: {flipped ? '0%' : '100%'}"-->
<!--		></DownloadIcon>-->
		{#if hovering}
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
								class="link p-2 m-1 font-bold bg-ukraine-yellow rounded-lg inline-block"
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
		<div class="place-items-center companies-children-grid bg-slate-200">
			{#each killer.children as child}
				<img src="/killers/{child.logo}" alt="" loading="lazy" style="" />
			{/each}
		</div>
	{/if}
</div>
