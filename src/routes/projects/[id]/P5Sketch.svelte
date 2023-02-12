<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';

	export let sketch = `(p5) => {
		p5.setup = () => {
			p5.createCanvas(100, 100);
			p5.fill(p5.random(255), p5.random(255), p5.random(255));
			p5.ellipse(50, 50, 50, 50);
		};

		p5.draw = () => {
		};
	};`;

	const sketchParsed: Sketch = eval(sketch);
</script>

<div class="sketch">
	<P5 sketch={sketchParsed} />
</div>

<style>
	.sketch {
		width: 100%;
		background: rgb(240, 240, 240);
		border: 0.1rem solid black;
		border-radius: 0.5rem;
		padding: 1rem 0;
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	@media (prefers-color-scheme: dark) {
		.sketch {
			background: rgb(15, 15, 15);
			border: 0.1rem solid rgb(70, 70, 70);
		}
	}
</style>
