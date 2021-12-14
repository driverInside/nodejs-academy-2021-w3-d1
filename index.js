import app from './app'
import debug from 'debug'
import mongo from './db/mongo'
import dotenv from 'dotenv'
dotenv.config()

const log = debug('globant:index')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`)
})
