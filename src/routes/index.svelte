<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="text-center">
	<h1 class="text-2xl md:text-6xl my-10">do strawberries dream of sweetest songs?</h1>
	<h2 class="text-xl">pinkius tells stories</h2>
</div>
