<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
    const project = data.props.project;
</script>

<h1>{project.name}</h1>
<h2>{project.description}</h2>
