import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, UserDTO, UpdateUserDTO } from "../dto/userDTO";

const prisma = new PrismaClient()

export default class UserRepository {  
  public readonly findAll = async (): Promise<UserDTO[]> => {
    const users = await prisma.user.findMany()

    const usersWithoutPassword = users.map(user => {
      //Deconstruction
      // "password, ...usersWithoutPassword" trae todos los datos, menos password

      const { password, ...usersWithoutPassword } = user
      
      /* usersWithoutPassword será un array de usuarios y mails, nada más */
      return usersWithoutPassword
    })
    return usersWithoutPassword
  }

  public readonly findById = async (id: number): Promise<UserDTO | undefined> => {
    const user = await prisma.user.findUnique({
      // findUnique porque sólo tengo el id
      where: {
        id,
      }
    })

    if(!user) return

    const { password, ...userWithoutPassword } = user 
    return userWithoutPassword
  }

  public readonly create = async (user:CreateUserDTO): Promise<UserDTO> => {
    const newUser = await prisma.user.create({
      data: user
    })
    const { password, ...userWithoutPassword } = newUser
    return userWithoutPassword
  }

  public readonly update = async (id:number, user:UpdateUserDTO): Promise<void> => {
    await prisma.user.update({
      where: {
        id
      },
      data: user
    })
  }

  public readonly delete = async (id:number): Promise<void> => {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }
}