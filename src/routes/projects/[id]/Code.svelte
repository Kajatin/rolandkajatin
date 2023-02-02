<script lang="ts">
	// @ts-ignore
	import Prism from 'prismjs';
	import 'prism-svelte';

	import './prism-components/prism-rust';

    import './prism-plugins/line-numbers/prism-line-numbers.js';
	import './prism-plugins/toolbar/prism-toolbar.js';
	import './prism-plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
	import './prism-plugins/remove-initial-line-feed/prism-remove-initial-line-feed.js';

	export let code: string;
	export let language: string;
</script>

<pre><code class="{language} line-numbers copy-to-clipboard remove-initial-line-feed">{code}</code></pre>

<style>
    @import url('./prism-plugins/line-numbers/prism-line-numbers.css');
	@import url('./prism-plugins/toolbar/prism-toolbar.css');
	@import url('./prism-themes/prism-vs-light.css');
</style>
