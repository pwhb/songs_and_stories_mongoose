<script>
	import { zawgyi, showSearchBar, showSearch, searchTerm } from '$lib/store';

	import SearchBar from './search_bar.svelte';

	const icons = {
		moon: '/svg/night-moon-svgrepo-com.svg',
		sun: '/svg/sun-weather-svgrepo-com.svg',
		strawberries: '/svg/strawberry-juice-svgrepo-com.svg',
		retro: '/svg/music-player-retro-svgrepo-com.svg'
	};
	function toggleZawgyi() {
		zawgyi.update((val) => !val);
	}

	function toggleSearchBar() {
		showSearchBar.update((val) => !val);
	}
</script>

<div class="navbar bg-base-100 mb-10 shadow-xl rounded-box">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">home</a></li>
				<li><a href="/stories">stories</a></li>
				<li><a href="/about">about</a></li>
				<li>
					<button on:click={toggleZawgyi}
						>{$zawgyi ? 'switch to unicode' : 'switch to zawgyi'}</button
					>
				</li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="normal-case text-xl" href="/">songs & stories</a>
	</div>
	<div class="navbar-end">
		{#if $showSearch}
			<button class="btn btn-ghost btn-circle" on:click={toggleSearchBar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		{/if}

		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						src="https://www.svgrepo.com/show/382162/drawing-brush-education-learning-painting-school-study.svg"
					/>
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<button data-set-theme="pastel" data-act-class="ACTIVECLASS">
						<img src={icons.sun} alt="" class="w-4 h-4" />
						light</button
					>
				</li>
				<li>
					<button data-set-theme="forrest" data-act-class="ACTIVECLASS">
						<img src={icons.moon} alt="" class="w-4 h-4" />
						dark</button
					>
				</li>
				<li>
					<button data-set-theme="valentine" data-act-class="ACTIVECLASS">
						<img src={icons.strawberries} alt="" class="w-4 h-4" />
						strawberries</button
					>
				</li>
				<li>
					<button data-set-theme="retro" data-act-class="ACTIVECLASS">
						<img src={icons.retro} alt="" class="w-4 h-4" />
						retro
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>

{#if $showSearch && $showSearchBar}
	<SearchBar />
{/if}
