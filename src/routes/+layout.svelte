<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
    @import './variables.css';

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    :global(body) {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
        background: rgb(251, 250, 241);
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    /* detect dark mode preference */
    /* @media (prefers-color-scheme: dark) {
        :global(body) {
            background: #111;
            color: #ccc;
        }
    } */
</style>
