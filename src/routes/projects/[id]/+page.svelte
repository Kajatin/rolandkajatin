<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	const project = data.props.project;
	const detail = data.props.detail;

	import Code from './Code.svelte';
	import Link from './Link.svelte';
	import Icon from '../Icon.svelte';
</script>

<div class="container">
	<h1>{project.name}</h1>

	<div class="logos">
		<ul>
			{#each project.icons || [] as icon}
				<Icon {icon} />
			{/each}
		</ul>
	</div>

	<Link url={project.github} />

	{#each detail as item}
		{#if item.type === 'code'}
			<Code code={item.value} language={item.lang} />
		{:else if item.type === 'h1'}
			<h1>{item.value}</h1>
		{:else if item.type === 'h2'}
			<h2>{item.value}</h2>
		{:else if item.type === 'p'}
			<p>{@html item.value}</p>
		{/if}
	{/each}
</div>

<style>
	.container {
		max-width: 60vw;
	}

	h1 {
		font-size: 2.3rem;
		margin: 0.8rem 0;
	}

	h2 {
		margin-top: 2.2rem;
		color: var(--accent-primary);
		opacity: 0.85;
	}

	p {
		opacity: 0.8;
		font-size: 1.1rem;
	}

	.logos {
		display: flex;
		flex-direction: column;
		align-self: stretch;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 0.4rem;
	}

	.logos ul {
		display: flex;
		flex-direction: row;
		gap: 0.7rem;

		list-style: none;

		margin: 0;
		padding: 0;
		width: min-content;
	}

	.container :global(a) {
		color: var(--accent-secondary);
		text-decoration: none;
	}

	@media (max-width: 1000px) {
		.container {
			max-width: 100%;
		}
	}
</style>
