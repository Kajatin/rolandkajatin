<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	const project = data.props.project;
	const detail = data.props.detail;

	import { onMount } from 'svelte';
	import Code from './Code.svelte';
	import Link from './Link.svelte';
	import Icon from '../Icon.svelte';
	import P5Sketch from './P5Sketch.svelte';

	let mode = 'light';
	onMount(() => {
		// add event listener to color scheme and evaluate it immediately on mount
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', (e) => {
			mode = e.matches ? 'dark' : 'light';
		});
		mode = mediaQuery.matches ? 'dark' : 'light';
	});
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
		{:else if item.type === 'h3'}
			<h3>{item.value}</h3>
		{:else if item.type === 'p'}
			<p>{@html item.value}</p>
		{:else if item.type === 'video'}
			<!-- svelte-ignore a11y-media-has-caption -->
			{#if mode === 'dark'}
				<div class="video-container">
					<video autoplay muted playsinline loop height={item.height}>
						<source src={item.value.dark} type="video/mp4" />
					</video>
				</div>
			{:else if mode === 'light'}
				<div class="video-container">
					<video autoplay muted playsinline loop height={item.height}>
						<source src={item.value.light} type="video/mp4" />
					</video>
				</div>
			{/if}
		{:else if item.type === 'image'}
			<div class="img-container">
				<img src={item.value} />
			</div>
		{:else if item.type === 'sketch'}
			<P5Sketch sketch={item.value} />
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

	h3 {
		margin: 0;
		opacity: 0.9;
	}

	p {
		opacity: 0.8;
		font-size: 1.1rem;
	}

	.video-container {
		width: 100%;
		background: rgb(240, 240, 240);
		border: 0.1rem solid black;
		border-radius: 0.5rem;
		padding: 1rem 0;
		display: flex;
		justify-content: center;
	}

	video {
		border-radius: 2.6rem;
	}

	.img-container {
		width: 100%;
		background: rgb(240, 240, 240);
		border: 0.1rem solid black;
		border-radius: 0.5rem;
		padding: 1rem 0;
		display: flex;
		justify-content: center;
	}

	img {
		width: 40%;
		border-radius: 1rem;
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

	@media (prefers-color-scheme: dark) {
		h2 {
			color: var(--accent-primary-dark);
		}

		.container :global(a) {
			color: var(--accent-secondary-dark);
		}

		.video-container {
			background: rgb(15, 15, 15);
			border: 0.1rem solid rgb(70, 70, 70);
		}

		.img-container {
			background: rgb(15, 15, 15);
			border: 0.1rem solid rgb(70, 70, 70);
		}
	}
</style>
