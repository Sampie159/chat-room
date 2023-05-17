import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { z } from 'zod';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/signin');
	return { user };
};

export const actions: Actions = {
	signout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	},

	joinroom: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const roomSchema = z.object({
			room_id: z.string().uuid()
		});

		const result = roomSchema.safeParse(form);
		if (!result.success) {
			const data = {
				data: form,
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		const session = await locals.auth.validate();
		if (!session) return fail(400);

		await prisma.authUser.update({
			where: {
				id: session.userId
			},
			data: {
				rooms: {
					connect: {
						id: result.data.room_id
					}
				}
			}
		});

		throw redirect(302, '/room/' + result.data.room_id);
	}
};
