import { error } from '@sveltejs/kit';
import { projects } from '/src/projects.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let project = projects.find((project) => project.id === params.id);

	if (project) {
		return {
			props: {
				project
			}
		};
	}

	throw error(404, 'Not found');
}
