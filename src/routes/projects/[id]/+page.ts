import { error } from '@sveltejs/kit';
import { projects } from '/src/projects.json';
import { details } from '/src/details.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let project = projects.find((project) => project.id === params.id);
	let detail = details[params.id];

	if (project) {
		return {
			props: {
				project,
				detail
			}
		};
	}

	throw error(404, 'Not found');
}
