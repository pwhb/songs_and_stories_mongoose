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
			href: 'https://trakt.tv/users/broccolipwh'
		},
		{
			alt: 'lichess',
			icon: 'https://www.svgrepo.com/show/330838/lichess.svg',
			href: 'https://lichess.org/@/broccolipwh'
		}
	];
</script>

<footer class="footer footer-center my-16 text-primary-content">
	<a href="/">songs & stories</a>

	<div>
		<div class="grid grid-flow-col gap-4">
			{#each socialLinks as { icon, alt, href }}
				<a {href} target="_blank">
					<img src={icon} {alt} class="w-8 p-1 md:w-12 md:p-2 rounded-full bg-gray-100" />
				</a>
			{/each}
		</div>
	</div>
</footer>
