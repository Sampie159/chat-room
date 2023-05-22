import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { messageSchema } from '$lib/schemas';
import { socket } from '$lib/webSocketConnection';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	const messages = await prisma.message.findMany({
		where: {
			room_id: id
		},
		orderBy: {
			created_at: 'asc'
		},
		take: 1000
	});

	const { room_name } = await prisma.room.findUnique({
		where: {
			id
		}
	});

	return { messages, id, room_name };
};

export const actions: Actions = {
	sendmessage: async ({ request, locals, params }) => {
		const form = Object.fromEntries(await request.formData());

		const result = messageSchema.safeParse(form);
		const session = await locals.auth.validate();
		if (!result.success) return fail(400, { invalidMessage: true });

		const message = await prisma.message.create({
			data: {
				content: result.data.message_content,
				user: {
					connect: {
						id: session?.userId
					}
				},
				room: {
					connect: {
						id: params.id
					}
				}
			}
		});

		socket.emit('newMessage', message, params.id);
	}
};
