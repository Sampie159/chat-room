import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname.startsWith('/signup') || event.url.pathname.startsWith('/signin')) {
		const session = await event.locals.auth.validate();
		if (session) throw redirect(302, '/');
	}

	if (event.url.pathname.startsWith('/room')) {
		const session = await event.locals.auth.validate();
		if (!session) throw redirect(302, '/signin');
	}

	return await resolve(event);
};
