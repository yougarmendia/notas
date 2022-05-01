interface BaseUserDTO {
  email: string
}

export interface UserDTO extends BaseUserDTO {
  id: number
}

export interface CreateUserDTO extends BaseUserDTO {
  password: string
}

/* update va a tener email y password, pero serán opcionales */
export type UpdateUserDTO = Partial<CreateUserDTO>

export interface LoginUserDTO extends UserDTO {
  password: string
}