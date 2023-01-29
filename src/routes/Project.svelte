<script lang="ts">
	import Icon from './Icon.svelte';

	type ProjectType = {
		name: string;
		description: string;
		cover: string;
		icons: string[] | null;
	};

	export let project: ProjectType;

	let src = '/images/' + project.cover;
</script>

<div class="top">
	<div class="logos">
		<ul>
			{#each project.icons || [] as icon}
				<Icon {icon} />
			{/each}
		</ul>
	</div>

	<div class="container">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img {src} />
		<div class="outer">
			<div class="inner">
				<h1>{project.name}</h1>
				<p>{project.description}</p>
			</div>
			<button>Read more</button>
		</div>
	</div>
</div>

<style>
	.top {
		position: relative;

		width: 100%;
		height: 100%;
		max-width: 80vw;

		border-radius: 1rem;
		border: 0.15rem solid black;
		box-shadow: 0.4rem 0.5rem transparent;

		overflow: hidden;
	}

	.top:hover {
		box-shadow: 0.4rem 0.5rem var(--accent-secondary);
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		box-shadow: 0rem 0rem var(--accent-secondary);
	}

	img {
		width: 40%;
		aspect-ratio: 3/2;
		object-fit: cover;
		object-position: left;
		margin: 0;
		padding: 0;
	}

	.outer {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 0.5rem;
		justify-content: center;
		align-items: flex-start;

		margin: 0 0 0 1rem;
		padding: 1rem;
	}

	.outer button {
		background: none;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		margin: 0;
		padding: 0;
		color: var(--accent-primary);
		border-bottom: 0.3rem solid transparent;
		transition: 0.2s ease-in-out;
	}

	.outer button:hover {
		/* text-decoration: underline; */
		border-bottom: 0.3rem solid var(--accent-primary);
		/* color: var(--accent-secondary); */
	}

	.inner > h1 {
		font-size: 2rem;
		margin: 0;
	}

	.inner > p {
		text-align: justify;
		margin: 1.5rem 0;
		opacity: 0.7;
	}

	.logos {
		position: absolute;
		top: 0;
		right: 0;

		display: flex;
		flex-direction: column;
		align-self: stretch;
		align-items: flex-end;
		justify-content: space-between;
		margin: 0.5rem 1rem 0 0;
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

	@media (max-width: 1000px) {
		.top {
			max-width: 100%;
		}

		.container {
			flex-direction: column;
		}

		.outer {
			margin: 0;
		}

		.logos {
			position: absolute;
			bottom: 0;
			right: 0;
			place-content: flex-end;
			margin: 0 1rem 0.5rem 0;
		}

		img {
			width: 100%;
			aspect-ratio: 16/9;
		}
	}
</style>
