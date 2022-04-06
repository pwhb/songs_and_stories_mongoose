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
	import Meta from '$lib/components/meta.svelte';
	export let story;
	const metadata = {
		title: story.title,
		description: story.content.slice(0, 255),
		image: story.imageSrc || '/main.jpg',
		imageAlt: '',
		url: ''
	};
</script>

<Meta {metadata} />

<Story {story} />
<div class="text-center">
	<a href="/stories" class="btn lowercase">back to stories</a>
</div>
