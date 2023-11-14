<script lang="ts">
	import { onMount } from 'svelte';

	export let icon: string;
	export let gray: boolean = false;

	import { icons } from '/src/icons.json';

	let ic = icons[icon];
	let fill = gray || !ic ? '' : ic.filldark ? ic.filldark : ic.fill;
	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			fill = gray || !ic ? '' : ic.filldark ? ic.filldark : ic.fill;
		} else {
			fill = gray || !ic ? '' : ic.fill;
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			console.log(e, ic.fill, ic.filldark);
			if (e.matches) {
				fill = gray || !ic ? '' : ic.filldark ? ic.filldark : ic.fill;
			} else {
				fill = gray || !ic ? '' : ic.fill;
			}
		});
	});
</script>

{#if ic}
	<li>
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill:{fill}">
			<title>{ic.title}</title>
			<path d={ic.path} />
		</svg>
	</li>
{/if}

<style>
	svg {
		width: 2rem;
		height: 2rem;
	}
</style>
