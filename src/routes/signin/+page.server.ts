import { redirect, fail } from '@sveltejs/kit';
import { z } from 'zod';
import { auth } from '$lib/server/lucia';
import type { Actions } from './$types';

export const actions: Actions = {
	signin: async ({ request, locals }) => {
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
			const key = await auth.useKey('username', result.data.username, result.data.password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
			redirect(302, '/');
		} catch {
			return fail(400);
		}
	}
};
