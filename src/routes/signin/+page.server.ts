import { redirect, fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { Actions } from './$types';
import { signSchema } from '$lib/schemas';

export const actions: Actions = {
	signin: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const result = signSchema.safeParse(form);

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
		} catch {
			const error = {
				error: true
			};

			return fail(400, error);
		}
		throw redirect(302, '/');
	}
};
