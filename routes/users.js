import { Router } from 'express'
import { createUser } from '../services/userService'

const router = Router()

router.post('/', async (req, res) => {
  const { email, password, name, username } = req.body

  const newUser = await createUser({
    email,
    password,
    name,
    username
  })

  res.status(201).send(newUser)
})

export default router
