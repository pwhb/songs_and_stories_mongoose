<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/stories/${params.id}`);
		const fileContent = await res.json();
		return {
			props: {
				...fileContent
			}
		};
	}
</script>

<script>
	import Story from '$lib/components/story.svelte';
	export let html;
	export let metadata;
</script>

<header>
	<title>{metadata.title}</title>
</header>

<Story {metadata} {html} />
<div class="text-center">
	<a href="/stories" class="btn lowercase">back to stories</a>
</div>
<!-- <section class="px-4 md:text-xl ">
	<h1 class="text-center text-2xl mb-10">{metadata.title}</h1>
	{#if metadata.photoUrl}
	<img class="mb-10" src={metadata.photoUrl} alt={`${metadata.title}`}>
	{/if}
	{#if $zawgyi}
		{@html uni2zg(html)}
	{:else}
		{@html html}
	{/if}
</section> -->
