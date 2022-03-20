<script>
	import '../app.css';
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
</script>

<header>
	<Nav />
</header>

<main class="px-8 sm:px-24 md:px-16 font-merriweather">
	<slot />
</main>

<footer>
	<Footer />
</footer>
