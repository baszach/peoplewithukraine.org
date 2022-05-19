<script>
	import ActHeader from './components/ActHeader.svelte';
	import ActBottom from './components/ActBottom.svelte';
</script>

<svelte:head>
	<title>How to help Ukraine</title>
	<meta
		title="description"
		content="Everyone can do something to help stop the war. Every small action counts."
	/>
</svelte:head>

<div>
	<div style="max-width: 64rem; display: inline-block">
		<ActHeader section="act" />
		<h1 class="text-3xl font-bold text-accent-gray text-center">Act</h1>
		<div class="text-left">
			<p class="mt-4">
				<strong>Share verified news:</strong> As this war is fought not only with weapons but also with
				information, it is very important to share information and stop the spreading of fake news. Try
				to report abusive, hateful or false content on social media platforms like Twitter.
			</p>
			<p class="mt-4">
				<strong>Join organizations and help groups:</strong> There are many different types of groups
				that help. They may collect food, blankets and other supply for Ukraine. Other groups are helping
				arriving refugees at airports and train stations of big cities (e.g. Berlin or Krakow).
			</p>
			<p class="mt-4">
				<strong>Find creative solutions:</strong> Many people use the knowledge of their professions
				to support Ukraine. IT specialists can help with cyberdefense, logistic experts can help with
				transportation of supply to Ukraine, photographers can take pictures of demonstrations, designers
				can make supportive art and influencers can call out Russia for their actions and share the truth.
			</p>
			<p class="mt-4">
				<strong>Reach out to politicians and companies:</strong> In the last days many companies have
				cut ties with Russia or temporarily stopped operating businesses there. It is important that
				many people raise their voice to hurt Russia's economy. Write letters, emails or comments to
				companies and politicians and urge them to reconsider their views (e.g. drawing back from Russia).
			</p>
			<p class="mt-4">
				<strong>Demonstrate:</strong> Apply pressure on Russia on a global scale. Call for action of
				politics and companies. Help organizing peace protests and other actions. We can't stay quiet
				in these times.
			</p>
		</div>
		<p class="mt-4 font-bold">
			Visit the following links to other organizations and initiatives and share them:
		</p>
		<ul class="text-left">
			<li>
				&bull; Information for Ukrainian refugees for many countries
				<a href="https://ukraina.guide/" target="_blank" class="link"> ukraina.guide </a>.
			</li>
			<li>
				&bull; How to help Ukraine
				<a href="https://supportukrainenow.org/" target="_blank" class="link">
					supportukrainenow.org
				</a> (with country specific tips).
			</li>
			<li>
				&bull; Website for refugees to find a place to sleep
				<a href="https://www.ukrainetakeshelter.com/" target="_blank" class="link">
					www.ukrainetakeshelter.com
				</a>.
			</li>
			<li>
				&bull; Find and share events against the Russian invasion of Ukraine
				<a href="https://www.stopputin.net/" target="_blank" class="link"> stopputin.net </a>.
			</li>
			<li>
				&bull; Join the Internation Legion of Defense of Ukraine
				<a href="https://fightforua.org/" target="_blank" class="link"> fightforua.org </a>.
			</li>
			<li>
				&bull; Register and find peace protest
				<a href="https://standwithukraine.live/" target="_blank" class="link">
					standwithukraine.live
				</a>.
			</li>
			<li>
				&bull; Inform yourself about businesses that retreated/remained in Russia
				<a href="https://www.yalerussianbusinessretreat.com/" target="_blank" class="link">
					yalerussianbusinessretreat.com
				</a>.
			</li>
			<li>
				&bull; Initiative to call out & boycott businesses that operate in Russia
				<a href="https://www.boycottrussia.info/" target="_blank" class="link">
					boycottrussia.info
				</a>.
			</li>
			<li>
				&bull; Card with ways to help and general information
				<a href="https://ukrainewar.carrd.co/" target="_blank" class="link">
					ukrainewar.carrd.co
				</a>.
			</li>
		</ul>
	</div>
	<ActBottom />
</div>
