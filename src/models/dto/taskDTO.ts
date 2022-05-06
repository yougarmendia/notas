/* Acá están modeladas las peticiones y respuestas.
Cada uno de estos modelos es un "CONTRATO" que definen
los objetos que nos van a llegar desde el usuario, que
nos va a llegar para crear y los objetos que vamos a
entregar desde el servidor...etc.
Es una forma de documentar */

/*  Hay que hacer varios DTOs porque para ciertos
entradas de datos van a haber datos opcionales, ejp
en el UPDATE todos los datos son OPCIONALES, en el
CREATE son obligatorios y en la respuesta también
son todos las keys obligatorias */

/* La base base no la exportamos para mayor seguridad */
interface BaseTaskDTO {
  id?: number
  title: string
  content: string
  done: boolean
}

/* La que sigue, TaskDTO es la base que modelará
la RESPUESTA de la API */
export interface TaskDTO extends BaseTaskDTO {
  id: number
  userId: number | null
}

/* Ahora el contrato para la creación de una task */
export interface CreateTaskDTO extends BaseTaskDTO {
  /* Ya está completa porque es exactamente
  igual a la BaseTaskDTO, igual sirve tenerla
  por si en el futuro queremos extender esta interface */
}

export interface UpdateTaskDTO extends Partial<BaseTaskDTO>{
  /* Partial cambia la obligación de los atributos (keys)
  que tiene BaseTaskDTO de obligatorias a NO obligatorias
  , o sea, no hay que estar pasándolas todas.  */
}


/* En el fondo es crear un CONTRATO para cada acto del CRUD. */