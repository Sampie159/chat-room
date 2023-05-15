import { redirect, type Actions, fail } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
};

export const actions: Actions = {
	signin: async ({ request, locals }) => {
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
			const key = await auth.useKey('username', result.data.username, result.data.password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
			redirect(302, '/');
		} catch {
			return fail(400);
		}
	}
};
