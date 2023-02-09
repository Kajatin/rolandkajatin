<script lang="ts">
	// @ts-ignore
	import Prism from 'prismjs';
	import 'prism-svelte';
	import { onMount } from 'svelte';

	import '$lib/prism-components/prism-rust';
	import '$lib/prism-components/prism-python';
	import '$lib/prism-components/prism-swift';

	import '$lib/prism-plugins/line-numbers/prism-line-numbers.js';
	import '$lib/prism-plugins/toolbar/prism-toolbar.js';
	import '$lib/prism-plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
	import '$lib/prism-plugins/remove-initial-line-feed/prism-remove-initial-line-feed.js';

	export let code: string;
	export let language: string;

	// on mount highlight the code
	onMount(() => {
		Prism.highlightAll();
	});
</script>

<pre><code class="{language} line-numbers copy-to-clipboard remove-initial-line-feed">{code}</code></pre>

<style>
	@import url('$lib/prism-plugins/line-numbers/prism-line-numbers.css');
	@import url('$lib/prism-plugins/toolbar/prism-toolbar.css');

	@import url('$lib/prism-themes/prism-vs-light.css') (prefers-color-scheme: light);
	@import url('$lib/prism-themes/prism-vs-dark.css') (prefers-color-scheme: dark);
</style>
