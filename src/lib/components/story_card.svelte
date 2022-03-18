<script>
	import { uni2zg } from '$lib/util/font_converter';
	import { formatDate } from '$lib/util/helper';
	import { zawgyi } from '$lib/store';
	export let metadata;
	export let title;
	export let preview;
	export let url;
</script>

<div class="card md:card-side bg-base-100 shadow-xl my-10">
	<figure>
		<img
			class="h-96 bg-slate-200"
			src={metadata.photoUrl ? metadata.photoUrl : '/svg/undraw_reading_time.svg'}
			alt="Album"
		/>
	</figure>
	<div class="card-body max-w-xl">
		<h2 class="card-title">{title}</h2>
		<div class="badge badge-accent">
			{formatDate(metadata.date)}
		</div>
		{#if $zawgyi}
			{@html uni2zg(preview)}
		{:else}
			{@html preview}
		{/if}

		{#if metadata.artist && metadata.song}
			<div class="badge badge-lg text-gray-100">
				<a href={metadata.youtube} class="lowercase">
					{metadata.song} - {metadata.artist}
				</a>
			</div>
		{/if}



		<div class="card-actions justify-end">
			<a href={`/stories/${url}`} class="btn btn-primary text-gray-100 lowercase">read</a>
		</div>
	</div>
</div>
