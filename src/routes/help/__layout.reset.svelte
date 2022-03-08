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

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>
