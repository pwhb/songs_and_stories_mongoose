<script context="module">
	import { client } from '$lib/gql/client';
	import { storyQuery } from '$lib/gql/query';
	export async function load({ params }) {
		const { slug } = params;
		const variables = { slug };
		const { story } = await client.request(storyQuery, variables);
		return {
			props: {
				story
			}
		};
	}
</script>

<script>
	import Story from '$lib/components/story.svelte';
	export let story;
</script>

<header>
	<title>{story.title}</title>
</header>

<Story {story} />
<div class="text-center">
	<a href="/stories" class="btn lowercase">back to stories</a>
</div>

