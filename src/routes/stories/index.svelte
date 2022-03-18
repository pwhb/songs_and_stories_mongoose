<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('api/stories');
		const stories = await res.json();
		return {
			props: {
				stories
			}
		};
	}
</script>

<script>
	import StoryCard from '$lib/components/story_card.svelte';
	import { searchTerm, showSearch } from '$lib/store';
	import { filterByArr } from '$lib/util/helper';
	import { onDestroy, onMount } from 'svelte';
	export let stories;
	export let filteredStories;
	$: {
		filteredStories =
			$searchTerm === ''
				? stories
				: stories.filter(
						(story) => filterByArr([story.metadata.title, story.rawBody, story.metadata.song], $searchTerm)
						// story.metadata.title.includes($searchTerm) ||
						// story.rawBody.includes($searchTerm)
				  );
	}

	onMount(() => {
		showSearch.set(true);
	});
	onDestroy(() => {
		showSearch.set(false);
	});
</script>

<header>
	<title>stories</title>
</header>

{#each filteredStories as { title, url, preview, metadata }, idx}
	<StoryCard {title} {url} {preview} {metadata} />
{/each}
