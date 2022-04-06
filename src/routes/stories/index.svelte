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
	import Meta from '$lib/components/meta.svelte';
	import StoryCard from '$lib/components/story_card.svelte';
	import { filteredIndices, showSearch, storiesStore } from '$lib/store';
	import { parseDate } from '$lib/util/helper';
	import { onDestroy, onMount } from 'svelte';
	export let stories;

	const metadata = {
		title: 'stories',
		description: 'hello friend, do you like stories?',
		image: '/main.jpg',
		imageAlt: '',
		url: ''
	};
	storiesStore.set(stories);

	onMount(() => {
		showSearch.set(true);
	});
	onDestroy(() => {
		showSearch.set(false);
	});
</script>

<Meta {metadata} />

<div class="px-4">
	{#each $storiesStore as story, idx}
		{#if !$filteredIndices.includes(idx)}
			<StoryCard {story} />
		{/if}
	{/each}
</div>
