<script lang="ts">
	import Icon from './Icon.svelte';

	type ProjectType = {
		id: string;
		name: string;
		description: string;
		cover: string;
		icons: string[] | null;
		github: string;
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
			<div class="links">
				<a href="/projects/{project.id}" aria-label="View source on GitHub"> Read more </a>
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View source on GitHub"
				>
					Source code
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.top {
		position: relative;

		width: 100%;
		height: 100%;
		max-width: 60vw;

		border-radius: 1rem;
		border: 0.15rem solid black;
		box-shadow: 0.2rem 0.25rem transparent;
		/* background: linear-gradient(45deg, var(--accent-secondary), var(--accent-primary)); */
		background: rgb(240, 240, 240);

		overflow: hidden;

		transition-property: all;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.top:hover {
		box-shadow: 0.2rem 0.25rem var(--accent-primary);
		transform: translate(-0.2rem, -0.2rem);
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		box-shadow: 0rem 0rem var(--accent-primary);
	}

	img {
		width: 40%;
		aspect-ratio: 1.2;
		object-fit: cover;
		overflow: hidden;
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

		padding: 1.5rem;
	}

	.outer a {
		text-decoration: none;
		font-weight: 600;
		margin: 0;
		padding: 0;
		color: var(--accent-secondary);
		border-bottom: 0.3rem solid transparent;
		transition: 0.2s ease-in-out;
	}

	.outer a:hover {
		border-bottom: 0.3rem solid var(--accent-secondary);
	}

	.links {
		display: flex;
		flex-direction: row;
		gap: 1rem;
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

		.inner > p {
			margin: 0.8rem 0;
		}

		.links {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
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

	@media (prefers-color-scheme: dark) {
		.top {
			border: 0.15rem solid rgb(70, 70, 70);
			background: rgb(15, 15, 15);
		}

		.top:hover {
			box-shadow: 0.2rem 0.25rem var(--accent-primary-dark);
		}

		.container {
			box-shadow: 0rem 0rem var(--accent-primary-dark);
		}

		.outer a {
			color: var(--accent-secondary-dark);
		}

		.outer a:hover {
			border-bottom: 0.3rem solid var(--accent-secondary-dark);
		}
	}
</style>
