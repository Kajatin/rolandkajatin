<script>
	import Project from './Project.svelte';
    import { projects } from '../projects.json';
</script>

<h1>Coming soon...</h1>
<div class="projects">
	{#each projects as project}
		<Project {project} />
	{/each}
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}
</style>
