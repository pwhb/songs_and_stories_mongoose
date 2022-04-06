<script>
	import { zawgyi } from '$lib/store';
	import { uni2zg } from '$lib/util/font_converter';
	import { formatDate } from '$lib/util/helper';
	import { marked } from 'marked';
	import AudioPlayer from './audio_player.svelte';

	export let story;
	const { title, content, date, audio, imageSrc } = story;
	const body = marked(content).replace(/\n/g, '<br>');
</script>

<!-- <svelte:head>
	<title>{title}</title>
</svelte:head> -->

<section class="px-4 md:text-xl ">
	<div class="mb-10 text-center">
		<h1 class="text-2xl mb-5">{story.title}</h1>
		<div class="badge badge-accent">
			{formatDate(date)}
		</div>
	</div>
	{#if imageSrc}
		<img class="mb-10 rounded-md p-1 bg-slate-200 mx-auto shadow-md" src={imageSrc} alt={`image for ${title}`} />
	{/if}

	{#if audio}
		<AudioPlayer {audio} />
	{/if}
	{#if $zawgyi}
		{@html uni2zg(body)}
	{:else}
		{@html body}
	{/if}
</section>
