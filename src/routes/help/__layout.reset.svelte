<script>
	import '../../app.css';
	import Nav from '../components/Nav.svelte';
	import Countries from '../components/Countries.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<header>
	<Nav />
	<Countries />
</header>

<main class="px-8 sm:px-24 md:px-32 lg:px-48">
	<slot />
</main>

<footer>
	<Footer />
</footer>
