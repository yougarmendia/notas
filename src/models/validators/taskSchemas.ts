import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/taskDTO'

export  const createTaskSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  done: Joi.string().required()
})

export const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
  title: Joi.string(),
  content: Joi.string(),
  done: Joi.string()
})

/* Con Joi podemos validar emails,URIs, URLs...etc */