<script lang="ts">
	import { onMount } from 'svelte';
	import P5, { type Sketch } from 'p5-svelte';

	let img;
	let imageLoaded = false;

	onMount(async () => {
		img = new Image();
		img.onload = () => imageLoaded = true;
		img.src = '/roland.png';
	});

	let sketch = `(p5) => {
		class Segment {
			constructor(x, y, brightness) {
				this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
				this.target = p5.createVector(x, y);
				this.brightness = brightness;
				this.vel = p5.Vector.random2D();
				this.acc = p5.createVector();
				this.r = 6;
				this.maxspeed = 5;
				this.maxforce = 1;
			}

			behaviors() {
				var arrive = this.arrive(this.target);
				var mouse = p5.createVector(p5.mouseX, p5.mouseY);
				var flee = this.flee(mouse);

				arrive.mult(1);
				flee.mult(3);

				this.applyForce(arrive);
				this.applyForce(flee);
			}

			applyForce(f) {
				this.acc.add(f);
			}

			update() {
				this.pos.add(this.vel);
				this.vel.add(this.acc);
				this.acc.mult(0);
			}

			show() {
				p5.stroke(this.brightness);
				p5.strokeWeight(this.r);
				p5.point(this.pos.x, this.pos.y);
			}

			arrive(target) {
				var desired = p5.Vector.sub(target, this.pos);
				var d = desired.mag();
				var speed = this.maxspeed;
				if (d < 70) {
				speed = p5.map(d, 0, 70, 0, this.maxspeed);
				}
				desired.setMag(speed);
				var steer = p5.Vector.sub(desired, this.vel);
				steer.limit(this.maxforce);
				return steer;
			}

			flee(target) {
				var desired = p5.Vector.sub(target, this.pos);
				var d = desired.mag();
				if (d < 70) {
				desired.setMag(this.maxspeed * 0.8);
				desired.mult(-1);
				var steer = p5.Vector.sub(desired, this.vel);
				steer.limit(this.maxforce * 0.8);
				return steer;
				} else {
				return p5.createVector(0, 0);
				}
			}
		}

		let segs = [];
		let img;
		let darkMode = false;

		// p5.preload = () => {
		// 	img = p5.loadImage("/roland.png");
		// };

		p5.setup = () => {
			const w = window.innerWidth < 1000 ? 350 : 550;
			p5.createCanvas(w, w+50);

			darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			const multiplier = darkMode ? 11 : 19;

			// img.resize(w, w);
			// img.loadPixels();

			for (let y = 0; y < 10; y += 8) {
				for (let x = 0; x < 10; x += 8) {
			// for (let y = 0; y < img.height; y += 8) {
			// 	for (let x = 0; x < img.width; x += 8) {
					// let index = (x + y * img.width) * 4;
					// let r = img.pixels[index + 0];
					// let g = img.pixels[index + 1];
					// let b = img.pixels[index + 2];
					// let a = img.pixels[index + 3];
					let a = 255;

					if (a === 0) {
						continue;
					}

					// let brightness = (r + g + b) / 3;
					let brightness = 255;
					let scaledBrightness = p5.sqrt(brightness) * multiplier;
					if (scaledBrightness >= 255) {
						scaledBrightness = 255;
					}

					segs.push(new Segment(x+50, y, scaledBrightness));
				}
			}
		};

		p5.draw = () => {
			p5.clear();

			for (let i = 0; i < segs.length; i++) {
				segs[i].behaviors();
				segs[i].update();
				segs[i].show();
			}
		};
	};`;
	const sketchParsed: Sketch = (0, eval)(sketch);

	let quirks = [
		'syncs with eccentricity!',
		'mingles with peculiarity!',
		'intertwines with geekiness!',
		'marries whimsicality!',
		'harmonizes with quirkiness!',
		'merges with nerdtastic fun!',
		'engages with individuality!',
		'meets with originality!',
		'collides with creativity!',
		'pairs with wit and wonder!'
	];
	let quirk = quirks[Math.floor(Math.random() * quirks.length)];
</script>

{#if imageLoaded}
	<div class="hero">
		<div class="sketch">
			<P5 sketch={sketchParsed} />
		</div>
		<div class="info">
			<h1>Hello world!</h1>
			<h3>
				I'm Roland, a systems engineer based in Copenhagen, currently annoying my colleagues at
				Teton.ai.
			</h3>
			<p>
				I'm a self-professed nerd who believes in the power of a semicolon (pun intended) and, when
				I'm not playing superhero in the digital world, you can find me exploring the physical one.
			</p>
			<p>
				I'm always ready to take on a new project, so if you have something in mind, feel free to
				hit me up on one of <a href="/contact">my socials</a>.
			</p>
			<p>
				Welcome to my corner of the internet, where coding
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					class="quirk"
					on:click={() => (quirk = quirks[Math.floor(Math.random() * quirks.length)])}
				>
					{quirk}
				</span>
			</p>
		</div>
	</div>
{:else}
  <div class="spinner"></div>
{/if}

<style>
	.hero {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 5rem 0rem;
		overflow: hidden;
	}

	.info {
		display: flex;
		flex-direction: column;
		margin-left: -5rem;
		max-width: 40%;
	}

	.sketch {
		width: fit-content;
		background: rgb(0, 0, 0, 0);
		overflow: hidden;
		user-select: none;
	}

	.quirk {
		color: var(--accent-primary);
		font-weight: bold;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		font-weight: 500;
		margin: 0;
		padding: 0;
		color: var(--accent-secondary);
		border-bottom: 0.1rem solid transparent;
		transition: 0.2s ease-in-out;
	}

	a:hover {
		border-bottom: 0.1rem solid var(--accent-secondary);
	}

	.spinner {
		position: relative;
		width: 4rem;
		height: 4rem;
		animation: spin 1.3s cubic-bezier(0.33, 0, 0.67, 1) infinite;
		margin: 10rem auto;
	}

	.spinner::before {
		content: "";
		position: absolute;
		top: -0.5rem;
		left: -0.5rem;
		right: -0.5rem;
		bottom: -0.5rem;
		background: linear-gradient(25deg, var(--accent-primary), var(--accent-secondary));
		border-radius: 1rem;
		z-index: -1;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		80% { transform: rotate(360deg); }
		100% { transform: rotate(360deg); }
	}

	@media (prefers-color-scheme: dark) {
		.quirk {
			color: var(--accent-primary-dark);
		}

		a {
			color: var(--accent-secondary-dark);
		}

		a:hover {
			border-bottom: 0.1rem solid var(--accent-secondary-dark);
		}

		.spinner::before {
			background: linear-gradient(25deg, var(--accent-primary-dark), var(--accent-secondary-dark));
		}
	}

	@media (max-width: 1000px) {
		.info {
			max-width: 100%;
			margin-left: 0;
		}

		.hero {
			flex-direction: column;
			margin: 0;
		}

		.sketch {
			order: 2;
		}
	}
</style>
