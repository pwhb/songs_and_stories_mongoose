<script>
	import { searchTerm } from '$lib/store';
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

