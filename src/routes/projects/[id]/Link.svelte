<script lang="ts">
	export let url: string;
</script>

<a
    class="sourcecode"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View source on GitHub"
>
    Source code
</a>

<style>
    a {
		text-decoration: none;
		font-weight: 600;
		margin: 0;
		padding: 0;
		color: var(--accent-secondary);
		border-bottom: 0.3rem solid transparent;
		transition: 0.2s ease-in-out;
	}

	a:hover {
		border-bottom: 0.3rem solid var(--accent-secondary);
	}

	@media (prefers-color-scheme: dark) {
		a {
			color: var(--accent-secondary-dark);
		}

		a:hover {
			border-bottom: 0.3rem solid var(--accent-secondary-dark);
		}
	}
</style>
