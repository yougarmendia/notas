import { Router } from 'express'
/* Importamos nuestro framework de trabajo express */
import HealthController from '../controllers/HealthController'
/*  Importamos el controlador que usaremos */
const healthRoutes = Router()

/* Indicamos que el método Router() de Express.js
tendrá el alias de healthRoutes */

const controller = new HealthController()

/* Ahora le asignamos la primera ruta:
si hacemos un get a la dirección '/info'
llamaremos al método info de la clase HealthController
que acá posee el alias de "controller" */

healthRoutes.get('/info', controller.info)

healthRoutes.get('/ping', controller.ping)

/* Ahora indicamos cómo podrá ser importado */
export default healthRoutes