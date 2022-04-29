import { Router } from 'express'
/* En este archivo juntaremos todas las rutas que estén
separadas, así sólo tendremos que importar éste en 
el documento que lo necesite:
Primero el Router de express y segundo el de HealthRoutes.ts
(lo llamamos como nos indica export default healthRoutes)
*/

import healthRoutes from './healthRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
/*  apiRoutes (que es el alias del router de Express)
está mandando TODAS LAS RUTAS QUE PASEN POR 
LA RAIZ al controlador ./healtRoutes.ts */

export default apiRoutes