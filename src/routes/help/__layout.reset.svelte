<script>
	import Nav from '../components/Nav.svelte';
	import Countries from '../components/Countries.svelte';
	import Cities from "../components/Cities.svelte";
	// import Footer from './components/Footer.svelte';
</script>

<header>
	<Nav />
	<Countries />
</header>

<main>
	<slot />
</main>

<footer>
	<!-- <Footer /> -->
</footer>
