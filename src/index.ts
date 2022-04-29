import 'dotenv/config'
// require('dotenv').config() // toma las variables de ambientes desde .dotenv
//const app = require('./app')
import app from './app'

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`You Garmendia's server is listening you on port ${PORT}`)
})