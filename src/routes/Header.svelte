<header>
	<nav>
		<ul>
			<li>Home</li>
			<li>Contact</li>
			<li>About</li>
		</ul>
	</nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        margin: 1rem;
    }

	nav ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 0.5rem;
        margin: 0;
        gap: 1rem;
        border-radius: 0.5rem;
        width: min-content;
        background: var(--accent-primary);
        box-shadow: 0.4rem 0.5rem var(--accent-secondary);
        font-size: 1.1rem;
	}

    nav ul li {
        color: var(--accent-secondary);
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0.4rem 0.5rem;
        border-radius: 0.25rem;
    }

    nav ul li:hover {
        color: var(--accent-primary);
        background: var(--accent-secondary);
    }
</style>
