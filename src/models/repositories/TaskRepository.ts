import { PrismaClient } from "@prisma/client";
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../dto/taskDTO";

const prisma = new PrismaClient()

/* Nuestro CRUD + findAll */

/* Vamos a crear y a consultar tasks dependiendo del userId */

export default class TaskRepository {
  /* Cada vez que instanciemos este repositorio, tendremos que pasarle un userId */
  private userId: number
  
  constructor(userId:number){
    this.userId = userId
  }

/* Que me traiga las task sólo del usuario que le estoy consultando */
/* Su respuesta (que es una promesa, deberá ser regulada por el controlador taskDTO) */
  public readonly findAll = async (): Promise<TaskDTO[]> => {
    const tasks = await prisma.task.findMany({
      where: {
        userId: this.userId
      }
    })
    return tasks
  }

  public readonly findById = async (id: number): Promise<TaskDTO | undefined> => {
    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: this.userId
      }
    })

    if(!task) return /* Si task no viene nulo o undefined */

    return task
  }

  public readonly create = async (task:CreateTaskDTO): Promise<TaskDTO> => {
    const newTask = await prisma.task.create({
      data: {
        ...task,
        userId: this.userId
      }
    })
    return newTask
  }

  public readonly update = async (id:number, task:UpdateTaskDTO): Promise<void> => {
    await prisma.task.updateMany({
      where: {
        /* filtramos por 2 datos: el usuario no puede actualizar un dato que no le pertenece */
        id,
        userId: this.userId
      },
      data: task
    })
  }

  public readonly delete = async (id:number) => {
    await prisma.task.deleteMany({
      where: {
        id,
        userId: this.userId
      }
    })
  }
}