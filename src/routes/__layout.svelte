<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from '$lib/components/header.svelte';
	import Footer from "$lib/components/footer.svelte"

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<main class="max-w-4xl mx-auto">
    <Header />
	<slot />
	<Footer/>
</main>
