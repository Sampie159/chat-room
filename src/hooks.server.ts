import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';
import { z } from 'zod';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const path = event.url.pathname;

	if (path.startsWith('/signup') || path.startsWith('/signin')) {
		const session = await event.locals.auth.validate();
		if (session) throw redirect(302, '/');
	}

	if (path.endsWith('/')) {
		const { user } = await event.locals.auth.validateUser();
		if (!user) throw redirect(302, '/signin');
	}

	if (path.startsWith('/room')) {
		const session = await event.locals.auth.validate();
		if (!session) throw redirect(302, '/signin');

		try {
			z.string().uuid().parse(path.substring(6));
		} catch {
			throw redirect(302, '/');
		}
	}

	return await resolve(event);
};
