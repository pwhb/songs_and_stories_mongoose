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
	let filteredStories;

	showSearch.subscribe((val) => {
		if (!val) {
			filteredStories = stories;
		}
	});
	$: {
		filteredStories =
			$searchTerm.trim() === ''
				? stories
				: stories.filter((story) => filterByArr([story.title, story.content], $searchTerm));
	}

	onMount(() => {
		showSearch.set(true);
	});
	onDestroy(() => {
		showSearch.set(false);
	});
</script>

<svelte:head>
	<title>stories</title>
</svelte:head>

<div class="px-4">
	{#each filteredStories as story, idx}
		<StoryCard {story} />
	{/each}
</div>
