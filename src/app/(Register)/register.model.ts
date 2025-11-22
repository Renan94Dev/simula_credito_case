import { z } from "zod";
import { CPF_MESSAGES } from "./formMessages.contants";

export const personalSchema = z.object({
	cpf: z.string().length(11, { error: CPF_MESSAGES.CPF_FORMAT_INCORRECT }),
});

export const emailSchema = z.object({
	email: z.email(),
});

export const registerDataSchema = personalSchema.extend(emailSchema.shape);
