<script context="module">
	import { client } from '$lib/gql/client';
	import { storiesQuery } from '$lib/gql/query';
	export async function load({}) {
		const { stories } = await client.request(storiesQuery);
		const sorted = stories.sort((a, b) => {
			const dateA = parseDate(a.date);
			const dateB = parseDate(b.date);
			if (dateA.year === dateB.year) {
				return parseInt(dateB.month) - parseInt(dateA.month);
			}
			return parseInt(dateB.year) - parseInt(dateA.year);
		});
		return {
			props: {
				stories: sorted
			}
		};
	}
</script>

<script>
	import StoryCard from '$lib/components/story_card.svelte';
	import { searchTerm, showSearch } from '$lib/store';
	import { filterByArr, parseDate } from '$lib/util/helper';
	import { onDestroy, onMount } from 'svelte';
	export let stories;
	export let filteredStories;
	$: {
		filteredStories =
			$searchTerm === ''
				? stories
				: stories.filter(
						(story) => filterByArr([story.title, story.content], $searchTerm)
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
	console.log(stories);
</script>

<svelte:head>
	<title>stories</title>
</svelte:head>

{#each filteredStories as story, idx}
	<StoryCard {story} />
{/each}
