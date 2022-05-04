import jwt from 'jsonwebtoken'
import { UserDTO, UserTokenPayLoad } from '../models/dto/userDTO'

const secret = process.env.JWT_SECRET as string

if(!secret){
  throw new Error ('JWT Secret not found on ENV variables')
}

export function generateToken(user:UserDTO){
  return jwt.sign(
    { sub: user.id, email: user.email },
    secret,
    { expiresIn: '7d' }
  )
}

/* Esta función va a verificar el token
y devolverá el token verificado */
export function verifyToken(token: string): UserTokenPayLoad {
  const verified = jwt.verify(token, secret)
  return verified as unknown as UserTokenPayLoad
}