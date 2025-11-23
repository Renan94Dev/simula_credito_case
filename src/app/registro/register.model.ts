import { CPF_REGEX } from "@/shared/regex";
import { z } from "zod";
import {
	CPF_MESSAGES,
	EMAIL_MESSAGES,
	PHONE_MESSAGES,
} from "./formMessages.contants";

export const personalSchema = z.object({
	cpf: z
		.string()
		.regex(CPF_REGEX, { error: CPF_MESSAGES.CPF_FORMAT_INCORRECT }),
});

export const emailSchema = z.object({
	email: z.email({ error: EMAIL_MESSAGES.EMAIL_FORMAT_INCORRECT }),
});

export const phoneSchema = z.object({
	phone: z.string().min(11, PHONE_MESSAGES.PHONE_FORMAT_INCORRECT),
});

export const registerDataSchema = personalSchema
	.extend(emailSchema.shape)
	.extend(phoneSchema.shape);
