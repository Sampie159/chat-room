import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { messageSchema } from '$lib/schemas';
import { socket } from '$lib/webSocketConnection';

export const load: PageServerLoad = async ({ params }) => {
	const messages = await prisma.message.findMany({
		where: {
			room_id: params.id
		},
		orderBy: {
			created_at: 'asc'
		},
		take: 1000
	});

	return { messages };
};

export const actions: Actions = {
	sendmessage: async ({ request, locals, params }) => {
		const form = Object.fromEntries(await request.formData());

		const result = messageSchema.safeParse(form);
		const session = await locals.auth.validate();
		if (!result.success || !session) {
			return fail(400);
		}

		await prisma.message.create({
			data: {
				content: result.data.message_content,
				user: {
					connect: {
						id: session.userId
					}
				},
				room: {
					connect: {
						id: params.id
					}
				}
			}
		});

		socket.emit('newMessage', params.id);
	}
};
