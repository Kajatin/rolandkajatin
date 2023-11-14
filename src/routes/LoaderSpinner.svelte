<div class="spinner" />

<style>
	.spinner {
		position: relative;
		width: 4rem;
		height: 4rem;
		animation: spin 1.3s cubic-bezier(0.33, 0, 0.67, 1) infinite;
		margin: 10rem auto;
	}

	.spinner::before {
		content: '';
		position: absolute;
		top: -0.5rem;
		left: -0.5rem;
		right: -0.5rem;
		bottom: -0.5rem;
		background: linear-gradient(25deg, var(--accent-primary), var(--accent-secondary));
		border-radius: 1rem;
		z-index: -1;
	}

	.spinner::after {
		content: '';
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
		right: 0.1rem;
		bottom: 0.1rem;
		background: var(--page-background);
		border-radius: 100%;
		z-index: -1;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		80% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media (prefers-color-scheme: dark) {
		.spinner::before {
			background: linear-gradient(25deg, var(--accent-primary-dark), var(--accent-secondary-dark));
		}

		.spinner::after {
			background: var(--page-background-dark);
		}
	}
</style>
