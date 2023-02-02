<script>
	import Project from './Project.svelte';
    import { projects } from '/src/projects.json';
</script>

<h1>Projects</h1>
<div class="projects">
	{#each projects as project}
		<Project {project} />
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 4rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		width: 100%;
	}
</style>
