import { Router } from 'express'
import TaskController from '../controllers/TaskController'
/* Tenemos un controlador que nos da los métodos CRUD en base a los contratos DTOs, ahora configuramos el Router que gestionará (en base a la ruta que se reciba) qué controlador se activará (y estos, a su vez, por qué DTO se regirá.) */

const taskRoutes = Router()
const controller = new TaskController

/* Acá asignamos cada acción de CRUD a cada una de las rutas */

/* Con el raiz traemos todas las rutas */
taskRoutes.get('/', controller.getAll)
taskRoutes.get('/:id', controller.getById)
taskRoutes.post('/', controller.create)
taskRoutes.put('/:id', controller.update)
taskRoutes.delete('/:id', controller.delete)

/* 
taskRoutes.get('/:id', controller.getById)
Esto es un get idempotente. Cuando mande un get con la ruta http://localhost:4000/api/v1/tasks/5

tomará el 5 como el id y me devolverá una tarea con el 
id 5

Si hago un POST y le mando la URL 
http://localhost:4000/api/v1/tasks

al entrar en /tasks sin id, se activará el create

*/

export default taskRoutes