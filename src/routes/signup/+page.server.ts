import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const schema = z.object({
			username: z.string().min(1).max(20),
			password: z.string().min(1).max(50)
		});

		const result = schema.safeParse(form);

		if (!result.success) {
			const errors = result.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});

			return fail(400, { error: true, errors });
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
