import express from 'express'
import helmet from 'helmet'
import router from './routes'

import authUserMiddleware from './middleware/auth'
const app = express()

app.use(helmet())

app.use(express.json())
app.use(router)

app.use(authUserMiddleware)

app.get('/protected/resource', (req, res) => {
  res.send({
    message: 'protected route'
  })
})

app.get('/profile', (req, res) => {
  res.send({
    message: `Welcome ${req.user.username} your email is ${req.user.email}`
  })
})

app.use('/', (req, res) => {
  res.send({
    message: 'Hello jwt'
  })
})
export default app
