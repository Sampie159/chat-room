import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname.startsWith('/signup') || event.url.pathname.startsWith('/signin')) {
		const session = await event.locals.auth.validate();
		if (session) throw redirect(302, '/');
	}

	return await resolve(event);
};
