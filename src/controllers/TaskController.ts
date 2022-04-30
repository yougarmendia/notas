import { Request, Response } from "express"
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../models/dto/taskDTO"

export default class TaskController {
  public readonly getAll = async (_req: Request, res: Response) => {
    /* Respondemos con un DTO */
    const tasks: TaskDTO[] = [
      {
      id: 1,
      title: 'Estudiar NodeJS',
      content: 'Estudiar, estudiar, estudiar',
      done: 'true',
      userId: 1 
      }
    ]
    res.json(tasks)
  }


  public readonly getById = async (req: Request, res: Response ) => {
    const { id } = req.params
    const task: TaskDTO = {
      id: parseInt(id),
      title: 'Estudiar NodeJS',
      content: 'Estudiar, estudiar, estudiar',
      done: 'true',
      userId: 1 
    }
    res.json(task)
  }

  public readonly create = async (req: Request, res: Response) => {
    const task = req.body as CreateTaskDTO
    res.json({
      id:1,
      ...task
    })
  }

/* "...task" copia los valores que trae la constante task y sólo agrega el id:1, este tipo de anotación se llama spread operator */

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params //este id nos llega por la ruta
    const task = req.body as UpdateTaskDTO
    console.log('Esto edita el', id, task)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log('Esto borra el id número ', id)
    res.sendStatus(204)
  }
}

/* Este controlador es que el creará todas las funciones CRUD + getAll. No olvidar que cada una de ellas, al tener que interactuar con la db deben ser ASÍNCRONAS. */

/* Todos los controladores de Express.js tiene los parámetro (req, res). El datatipo **DEBE SER**el que se ofrece con la LLAVE que le pertenece a express, no otro */