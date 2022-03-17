

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