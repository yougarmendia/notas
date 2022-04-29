import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes'

/*

Cuando te salga que no puede encontrar la declaración
ve a DefinitelyTyped.org, que guarda todas las definiciones
de tipo en un repositorio y ahí, como 5ta instalación
deberás hacer:

npm i -D @types/express @types/morgan

*/

const app = express()

app.use(express.json())
app.use(morgan('dev'))

/* Le pasamos a app una ruta padre de las rutas
de nuestra API (/api/v1). ApiRoutes es nuestro
"handler" de las rutas en index.ts que lo manda
todo a healthRoutes.ts */
app.use('/api/v1', apiRoutes)

/* Ahora creamos un controlador que ejecutaremos
en el caso de un 404 (un status 404, un error de
usuario) que nos devolverá un json con la key message
y su value "no podemos encontrar esa URL" */

app.use((_req, res)=>{
  res.status(404).json({
    message: "We can't find that URL o(TヘTo)"
  })
})

/* Esa fue la forma CORRECTA de hacer un 404 en 
Express.js para servicio REST */

export default app