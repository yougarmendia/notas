interface BaseUserDTO {
  email: string
}

export interface UserDTO extends BaseUserDTO {
  id: number
}

export interface CreateUserDTO extends BaseUserDTO {
  password: string,
  firstName: string,
  lastName:string
}

/* update va a tener email y password, pero serán opcionales */
export type UpdateUserDTO = Partial<CreateUserDTO>

export interface LoginUserDTO extends UserDTO {
  password: string
}

/* 
Después de arreglar el entuerto, el profesor me indica 
que la idea es entender esto...
email, firstName, lastName deberían ser incluidos SIEMPRE,
tanto en respuestas como escritura, password JAMÁSbo será leído en
respuestas, pero siempre estará en escritura

UserDTO -> id, firstName, lastName, email
CreateUserDTO -> firstName, lastName, email, password
UpdateUserDTO -> Partial<CreateUserDTO>
*/