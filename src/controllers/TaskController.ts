import { Request, Response } from "express"
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../models/dto/taskDTO"
import TaskRepository from "../models/repositories/TaskRepository"
import { createTaskSchema, updateTaskSchema } from "../models/validators/taskSchemas"
import { UserTokenPayLoad } from "../models/dto/userDTO"
export default class TaskController {
  public readonly getAll = async (req: Request, res: Response) => {
    /* Respondemos con un DTO */
    const user = req.user as UserTokenPayLoad
    const repository = new TaskRepository(user.sub)


    try{
      const tasks: TaskDTO[] = await repository.findAll() /* Esto me trae un task basado en el esquema */
      res.json(tasks)
    } catch(error){
      console.log(error)
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  public readonly getById = async (req: Request, res: Response ) => {
    const { id } = req.params
    const user = req.user as UserTokenPayLoad
    const repository = new TaskRepository(user.sub)

    try{
      const task = await repository.findById(parseInt(id))

      if (!task) {
        res.status(404).json({ message: 'Nota no encontrada' })
        return /* Siempre retornar el primero si hay 2 res seguidos
      para que se detenga */
      }
      res.json(task)
    } catch(error){
      res.status(400).json({ message: error.message })
      return
    }

  }

  public readonly create = async (req: Request, res: Response) => {
    const task = req.body as CreateTaskDTO

    try {
      await createTaskSchema.validateAsync(task)
    } catch (error) {
      res.status(400).json({ message: error.message })
      return
    }

    const user = req.user as UserTokenPayLoad
    const repository = new TaskRepository(user.sub)

    try {
      const newTask = await repository.create(task)
      res.json(newTask)
    }catch(error) {
      if (error.code === 'P2002') {
        res.status(409).json({ message: 'Task already exists' })
        return
      }
      console.log(error)
      console.log('Error code: ', error.code)
      res.status(500).json({ message: 'Something went wrong' })
    }
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

    const user = req.user as UserTokenPayLoad
    const repository = new TaskRepository(user.sub)
    
    try {
      await repository.update(parseInt(id), task)
      res.sendStatus(204)
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(409).json({ message: 'Task already exists' })
        return
      }
      console.log(error)
      console.log('Error code: ', error.code)
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const user = req.user as UserTokenPayLoad
    const repository = new TaskRepository(user.sub)

    try {
      await repository.delete(parseInt(id))
      res.sendStatus(204)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something went wrong' })
    }
  }
}

/* Este controlador es que el creará todas las funciones CRUD + getAll. No olvidar que cada una de ellas, al tener que interactuar con la db deben ser ASÍNCRONAS. */

/* Todos los controladores de Express.js tiene los parámetro (req, res). El datatipo **DEBE SER**el que se ofrece con la LLAVE que le pertenece a express, no otro */