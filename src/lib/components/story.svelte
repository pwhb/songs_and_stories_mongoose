<script>
	import { zawgyi } from '$lib/store';
	import { uni2zg } from '$lib/util/font_converter';
	import { formatDate } from '$lib/util/helper';
	import AudioPlayer from './audio_player.svelte';
	export let metadata;
	export let html;
</script>

<section class="px-4 md:text-xl ">
	<div class="mb-10 text-center">
		<h1 class="text-2xl mb-5">{metadata.title}</h1>
		<div class="badge badge-accent">
			{formatDate(metadata.date)}
		</div>
	</div>
	{#if metadata.photoUrl}
		<img class="mb-10" src={metadata.photoUrl} alt={`${metadata.title}`} />
	{/if}

	{#if metadata.audioSrc}
		<AudioPlayer src={metadata.audioSrc} title={metadata.song} artist={metadata.artist} />
	{/if}
	{#if $zawgyi}
		{@html uni2zg(html)}
	{:else}
		{@html html}
	{/if}
</section>
