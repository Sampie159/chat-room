import type { Actions } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { signSchema } from '$lib/schemas';

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		const result = signSchema.safeParse(form);

		if (!result.success) {
			const data = {
				data: form,
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

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

		throw redirect(302, '/');
	}
};
