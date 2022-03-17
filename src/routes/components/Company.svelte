<script>
    import LinkedInComponent from "./LinkedInComponent.svelte";
    export let killer;
    let flipped = false;
</script>
<div class="bg-slate-200 py-2 text-center h-max flex justify-between" on:click={() => flipped = !flipped}>
    <div style="width: {killer.children == null ? '100%' : '50%'}">
        <p class="text-red-600 font-bold text-xl">{killer.name}</p>
        <p>{killer.info}</p>
        {#if !flipped}
            <div class="grid place-items-center mt-2">
                {#if killer.pic != null}
                    <img src="/killers/{killer.pic}" alt="" class="h-64"/>
                {:else}
                    <img src="/killers/{killer.logo}" alt="" style="width: 9rem"/>
                {/if}
            </div>
        {:else}
            <div class="p-6 text-left" style="min-height: {killer.pic != null ? '16rem' : '8rem'}">
                <p class="p-2 bg-ukraine-blue text-white font-bold rounded-lg">{killer.area}</p>
                {#if killer.all_brands != null}<a class="link p-2" target="_blank" href="{killer.all_brands}">view all brands</a>{/if}
                {#if killer.linkedin != null}<a class="link p-2" target="_blank" href="{killer.linkedin}"><LinkedInComponent/></a>{/if}
            </div>
        {/if}
    </div>
    {#if killer.children != null}
        <div class="place-items-center" style="display: grid; grid-template-columns: repeat(auto-fill, 6em); grid-gap: 2em; width: 50%">
            {#each killer.children as child}
                <img src="/killers/{child.logo}" alt="" style=""/>
            {/each}
        </div>
    {/if}
</div>