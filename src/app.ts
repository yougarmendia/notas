import express from 'express'
import morgan from 'morgan'

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

app.get('/', (_req,res) => {
  res.send('Hello World!')
})

export default app