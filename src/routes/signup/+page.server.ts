import type { Actions } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { signSchema } from '$lib/schemas';
import prisma from '$lib/prisma';

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

		const user = await prisma.authUser.findUnique({
			where: {
				username: result.data.username
			}
		});

		if (user) {
			return fail(400, { userExists: true });
		}

		const newUser = await auth.createUser({
			primaryKey: {
				providerId: 'username',
				providerUserId: result.data.username,
				password: result.data.password
			},
			attributes: {
				username: result.data.username
			}
		});

		const session = await auth.createSession(newUser.userId);
		locals.auth.setSession(session);

		throw redirect(302, '/');
	}
};
