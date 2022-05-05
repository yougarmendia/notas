import { Router } from 'express'
import taskRoutes from './taskRoutes'
/* En este archivo juntaremos todas las rutas que estén
separadas, así sólo tendremos que importar éste en 
el documento que lo necesite:
Primero el Router de express y segundo el de HealthRoutes.ts
(lo llamamos como nos indica export default healthRoutes)
*/

import healthRoutes from './healthRoutes'
import authRoutes from './authRoutes'
import tokenValidator from '../middlewares/tokenValidator'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
/*  apiRoutes (que es el alias del router de Express)
está mandando TODAS LAS RUTAS QUE PASEN POR 
LA RAIZ al controlador ./healtRoutes.ts */

/* Al siguiente (las rutas de tasks) le colocamos la ruta /tasks antes para que se activen los controladores CRUD cuando escriba /tasks/post + la acción

ej: 
http://localhost:4000/api/v1/tasks y será llamar a getAll()

http://localhost:4000/api/v1/tasks/5 

*/

/* Todas las rutas que pasen por /task
tienen que venir con un token validado */
apiRoutes.use('/tasks', tokenValidator(), taskRoutes)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes