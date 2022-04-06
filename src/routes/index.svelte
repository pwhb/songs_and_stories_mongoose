<script>
	import Meta from '$lib/components/meta.svelte';
	import { fade } from 'svelte/transition';
	const metadata = {
		title: 'home',
		description: 'hello friend, do you like stories?',
		image: '/main.jpg',
		imageAlt: '',
		url: ''
	};
</script>

<Meta {metadata} />
<div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="text-center">
	<h1 class="text-2xl md:text-6xl my-10">do strawberries dream of sweetest songs?</h1>
	<h2 class="text-xl">pinkius tells stories</h2>
</div>
