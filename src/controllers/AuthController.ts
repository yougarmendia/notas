/* Controlador de autenticación */
import { Request, Response } from "express"
import { generateToken } from "../lib/jwt"
import { CreateUserDTO } from "../models/dto/userDTO"
import UserRepository from "../models/repositories/UserRepository"
import { loginSchema, registerSchema } from "../models/validators/userSchemas"

export default class AuthController {
  public readonly login = async (req:Request, res: Response) => {
    const credentials = req.body
    



    /* En el siguiente try se hace la validación de si es lo que estoy esperando */
    try {
      await loginSchema.validateAsync(credentials)
    } catch (err) {
      res.status(400).json({
        error: err.message
      })
      return
    }
    const repository = new UserRepository()

    const userFromDb = await repository.findByEmail(credentials.email)

    if(!userFromDb || userFromDb.password !== credentials.password) {
      res.status(401).json({ message: 'Credenciales inválidas, inténtelo de nuevo por favor'})
      return
    }

    const token = generateToken(userFromDb)


    res.json({ token })
  }

  public readonly register = async (req: Request, res: Response) => {
    const user = req.body as CreateUserDTO
    
    try {
      await registerSchema.validateAsync(user)
    } catch (error) {
      res.status(400).json({
        error: error.message
      })
      return
    }

    const repository = new UserRepository()
    const newUser = await repository.create(user)

    res.status(201).json(newUser)
  }
}