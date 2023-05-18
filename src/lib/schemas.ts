import { z } from 'zod';

export const signSchema = z.object({
	username: z.string().min(4).max(20),
	password: z.string().min(1).max(50)
});

export const roomJoinSchema = z.object({
	room_id: z.string().uuid()
});

export const roomCreateSchema = z.object({
	room_name: z.string().min(4).max(60)
});
