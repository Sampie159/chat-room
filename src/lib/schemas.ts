import { z } from 'zod';

export const signSchema = z.object({
	username: z.string().min(4).max(20),
	password: z.string().min(1).max(50)
});

export const roomIdSchema = z.object({
	room_id: z.string().uuid()
});

export const roomNameSchema = z.object({
	room_name: z.string().min(4).max(60)
});

export const messageSchema = z.object({
	message_content: z.string().min(1)
});
