<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<!-- <svelte:head>
	<meta name="description" content="hello friend, do you like stories?" />
	<meta name="og:title" content="songs & strawberries" />
	<meta property="og:image" content="/main.jpg" />
</svelte:head> -->

<main class="max-w-4xl mx-auto">
	<Header />
	<slot />
	<Footer />
</main>
