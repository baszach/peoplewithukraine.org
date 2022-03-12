<script>
	import Nav from '../../components/Nav.svelte';
	import Footer from '../../components/Footer.svelte';
	import Countries from '../../components/Countries.svelte';
	import Germany from '../../components/Germany.svelte';
</script>

<header>
	<Nav />
	<Countries />
	<Germany />
</header>

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>
