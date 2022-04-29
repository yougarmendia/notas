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

export interface BaseTaskDTO {
  id?: number
  title: string
  content: string
  done: string
  userId: string 
}