<script>
	import Meta from '$lib/components/meta.svelte';

	const metadata = {
		title: 'about',
		description: 'I write',
		image: '/main.jpg',
		imageAlt: '',
		url: ''
	};
</script>

<Meta {metadata} />

<div class="text-center">
	<h1 class="text-2xl my-10">about me</h1>
	<h2>I write.</h2>
</div>
