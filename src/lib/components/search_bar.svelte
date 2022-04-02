<script>
	import { storyQuery } from '$lib/gql/query';

	import { filteredIndices, searchTerm, showSearch, storiesStore } from '$lib/store';
	import { filterByArr } from '$lib/util/helper';
	import Story from './story.svelte';
	showSearch.subscribe((val) => {
		if (!val) {
			filteredIndices.set([]);
		}
	});

	searchTerm.subscribe((val) => {
		// const stories = val.trim()
		// 	? $storiesStore.filter((story) => filterByArr([story.title, story.content], val))
		// 	: $storiesStore;
		const indices = [];

		for (let i = 0; i < $storiesStore.length; i++) {
			const { title, content } = $storiesStore[i];
			if (!filterByArr([title, content], val)) {
				indices.push(i);
			}
		}
		filteredIndices.set(indices);
		// filteredStoriesStore.set(stories);
	});
</script>

<div class="text-center px-3">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		type="text"
		placeholder="search by title"
		class="input input-bordered input-accent w-full md:max-w-xl"
		bind:value={$searchTerm}
		autofocus
	/>
</div>
