import { roomNameSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '$lib/prisma';

export const actions: Actions = {
	createroom: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const result = roomNameSchema.safeParse(form);
		if (!result.success) return fail(400, { invalidName: true });

		const session = await locals.auth.validate();

		const { id } = await prisma.room.create({
			data: {
				room_name: result.data.room_name,
				users: {
					connect: {
						id: session?.userId
					}
				}
			}
		});

		throw redirect(302, '/room/' + id);
	}
};
