require('dotenv').config() // toma las variables de ambientes desde .dotenv
const app = require('./app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`This marvelous server is listening you on port ${PORT}`)
})