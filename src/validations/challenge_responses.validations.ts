import Joi from 'joi';
import { constents } from '../configs/constents.config';
import { speeches } from '../configs/speeches.config';

export const challengeResponsesUpdateSchema = Joi.object().keys({
    status: Joi.string().valid(...Object.values(constents.challenges_flags.list)).required().messages({
        'any.only': speeches.COMMON_STATUS_INVALID,
        'string.empty': speeches.COMMON_STATUS_REQUIRED
    })
});
export const UpdateAnyFieldSchema = Joi.object().keys({
    status: Joi.string().valid(...Object.values(constents.challenges_flags.list)).messages({
        'any.only': speeches.COMMON_STATUS_INVALID,
        'string.empty': speeches.COMMON_STATUS_REQUIRED
    }),
    team_id: Joi.number().min(1),
    response: Joi.string().trim().min(1),
    evaluated_by: Joi.number().min(1),
    evaluated_at: Joi.string().trim().min(1),
    sdg: Joi.string().trim().min(1),
    others: Joi.string().trim().min(1)
});
export const initiateIdeaSchema = Joi.object().keys({
    sdg: Joi.string().required().messages({
        'any.only': speeches.COMMON_STATUS_INVALID,
    })
});
export const challengeResponsesSchema = Joi.object().keys({
    responses: Joi.array().required().messages({
        'any': speeches.SELCTED_OPTION_REQUIRED
    }),
    status: Joi.string().valid(...Object.values(constents.challenges_flags.list)).required().messages({
        'any.only': speeches.COMMON_STATUS_INVALID,
        'string.empty': speeches.COMMON_STATUS_REQUIRED
    }),
    sdg: Joi.string().trim().min(1),
    others: Joi.string().trim().min(1)
});