<script>
	export let src;
	export let title;
	export let artist;

	let audio;
	let paused = true;

	function stopOthers() {
		// TODO: implement stopOthers
	}
</script>

<div class="card shadow-md rounded-2xl bg-secondary p-3 md:p-6 mx-auto max-w-md my-3 md:my-10">
	<!-- <article class:playing={!paused}> -->
	<div class="flex flex-row items-center">
		<div class="avatar">
			<div class={`w-20 p-2 rounded-full ${paused ? '' : 'ring ring-primary rotating'}`}>
				<img src="/svg/music-player-retro-svgrepo-com.svg" alt="music player" />
			</div>
		</div>
		<div
			class={`text-center lowercase flex flex-col flex-1 ${paused ? '' : 'text-gray-100 dancing'}`}
		>
			<h2 class="font-semibold">{title}</h2>
			<small class="mt-2 font-semibold">{artist}</small>
		</div>
	</div>
	<audio
		bind:this={audio}
		bind:paused
		on:play={stopOthers}
		controls
		class="w-full mt-6"
		src={`http://docs.google.com/uc?export=open&id=${src}`}
	/>
	<!-- </article> -->
</div>

<style>
	/* audio {
		width: 100%;
		margin: 2rem 0 0 0;
	} */

	.rotating {
		animation: rotate_45 4s infinite;
	}

	.dancing {
		animation: rotate_small 3s infinite;
	}

	@keyframes rotate_45 {
		25% {
			transform: rotate(-45deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes rotate_small {
		25% {
			transform: rotate(-2deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
