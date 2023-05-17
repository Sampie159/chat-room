import { z } from 'zod';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const actions: Actions = {
	createroom: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const schema = z.object({
			room_name: z.string().min(4).max(60)
		});

		const result = schema.safeParse(form);

		if (!result.success) {
			const data = {
				data: form,
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		const { session } = await locals.auth.validateUser();

		if (!session) return fail(400);

		const { id } = await prisma.room.create({
			data: {
				room_name: result.data.room_name,
				users: {
					connect: {
						id: session.userId
					}
				}
			}
		});

		throw redirect(302, '/room/' + id);
	}
};
