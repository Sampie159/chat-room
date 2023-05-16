import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const schema = z.object({
			username: z.string().min(1).max(20),
			password: z.string().min(1).max(50)
		});

		const result = schema.safeParse(form);

		if (!result.success) {
			const data = {
				data: form,
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: result.data.username,
					password: result.data.password
				},
				attributes: {
					username: result.data.username
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
			redirect(302, '/');
		} catch {
			return fail(400);
		}
	}
};
