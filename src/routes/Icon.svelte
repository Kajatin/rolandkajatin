<script lang="ts">
	export let icon: string;
	export let gray: boolean = false;

	import { icons } from '../icons.json';

	let ic = icons[icon];
	let fill = gray || !ic ? '' : ic.fill;
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
