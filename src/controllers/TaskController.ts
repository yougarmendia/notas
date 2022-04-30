import { Request, Response } from "express"
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../models/dto/taskDTO"
import TaskRepository from "../models/repositories/TaskRepository"
import { createTaskSchema, updateTaskSchema } from "../models/validators/taskSchemas"

export default class TaskController {
  public readonly getAll = async (_req: Request, res: Response) => {
    /* Respondemos con un DTO */
    const repository = new TaskRepository(1)
    const tasks: TaskDTO[] = await repository.findAll() /* Esto me trae un task basado en el esquema */

    res.json(tasks)
  }


  public readonly getById = async (req: Request, res: Response ) => {
    const { id } = req.params
    const repository = new TaskRepository(1)
    const task = await repository.findById(parseInt(id))

    if(!task){
      res.status(404).json({message: 'Nota no encontrada'})
      return /* Siempre retornar el primero si hay 2 res seguidos
      para que se detenga */
    }

    res.json(task)
  }

  public readonly create = async (req: Request, res: Response) => {
    const task = req.body as CreateTaskDTO

    try {
      await createTaskSchema.validateAsync(task)
    } catch (error) {
      res.status(400).json({ message: error.message })
      return
    }

    const repository = new TaskRepository(1)
    const newTask = await repository.create(task)

    res.json(newTask)
  }


  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params //este id nos llega por la ruta
    const task = req.body as UpdateTaskDTO

    try {
      await updateTaskSchema.validateAsync(task)
    } catch (error) {
      res.status(400).json({ message: error.message })
      return
    }

    const repository = new TaskRepository(1)

    await repository.update(parseInt(id),task)

    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new TaskRepository(1)

    await repository.delete(parseInt(id))

    res.sendStatus(204)
  }
}

/* Este controlador es que el creará todas las funciones CRUD + getAll. No olvidar que cada una de ellas, al tener que interactuar con la db deben ser ASÍNCRONAS. */

/* Todos los controladores de Express.js tiene los parámetro (req, res). El datatipo **DEBE SER**el que se ofrece con la LLAVE que le pertenece a express, no otro */