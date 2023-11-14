import { error } from '@sveltejs/kit';
import { projects } from '/src/projects.json';
import { details } from '/src/details.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = projects.find((project: any) => project.id === params.id);
	const detail = details[params.id];

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
