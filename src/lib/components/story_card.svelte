<script>
	import { uni2zg } from '$lib/util/font_converter';
	import { formatDate } from '$lib/util/helper';
	import { zawgyi } from '$lib/store';
	export let story;
	const { title, slug, content, date, tags, audio, imageSrc } = story;
	const preview = content.slice(0, 255) + ' ...';
</script>

<div class="card md:card-side bg-base-100 shadow-xl my-10">
	<figure>
		<img
			class="md:h-96 bg-slate-200"
			src={imageSrc ? imageSrc : '/svg/undraw_reading_time.svg'}
			alt="Album"
		/>
	</figure>
	<div class="card-body max-w-xl">
		<h2 class="card-title">{title}</h2>
		<div class="badge badge-accent">
			{formatDate(date)}
		</div>
		{#if $zawgyi}
			{@html uni2zg(preview)}
		{:else}
			{@html preview}
		{/if}

		{#if audio}
			<div class="text-info font-semibold mt-10">
				<a href={audio.youtube} class="lowercase" target="_blank">
					🎵 {audio.title} - {audio.artist} 🎵
				</a>
			</div>
		{/if}

		<div class="card-actions justify-end">
			<a href={`/stories/${slug}`} class="btn btn-primary text-gray-100 lowercase">read</a>
		</div>
	</div>
</div>
