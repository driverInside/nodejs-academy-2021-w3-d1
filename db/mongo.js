import mongoose from 'mongoose'
import debug from 'debug'

const log = debug('globant:db')
const uri = 'mongodb://localhost:27017/academy'

mongoose.connect(uri, {}, () => {
  log('Database connection is ready')
})
