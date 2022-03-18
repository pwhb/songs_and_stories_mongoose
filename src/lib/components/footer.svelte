<script>
	const socialLinks = [
		{
			alt: 'goodreads',
			icon: 'https://www.svgrepo.com/show/349384/goodreads.svg',
			href: 'https://goodreads.com/pwhb'
		},
		{
			alt: 'trakt.tv',
			icon: 'https://www.svgrepo.com/show/306870/trakt.svg',
			href: 'https://trakt.tv/users/broccolipwhgoodreads.com/pwhb'
		},
		{
			alt: 'lichess',
			icon: 'https://www.svgrepo.com/show/330838/lichess.svg',
			href: 'https://lichess.org/@/broccolipwh'
		}
	];
</script>

<footer class="footer footer-center my-16 text-primary-content">
	<a href="/">songs & strawberries</a>

	<div>
		<div class="grid grid-flow-col gap-4">
			{#each socialLinks as { icon, alt, href }}
				<a {href} target="_blank">
					<img src={icon} {alt} class="w-8" />
				</a>
			{/each}
			<!-- <a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					/></svg
				></a
			>
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					/></svg
				></a
			> -->
		</div>
	</div>
</footer>
