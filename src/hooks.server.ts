import prisma from '$lib/prisma';
import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';

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

		const room_id = path.substring(6);
		const room = await prisma.room.findUnique({
			where: {
				id: room_id
			}
		});

		if (!room) throw redirect(302, '/');
	}

	return await resolve(event);
};
