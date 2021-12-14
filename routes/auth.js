/*
// const express = require('express')
const express = require('express')
const router = express.Router()
import express from 'express'
// const { Router } = require('express')
*/
import { Router } from 'express'
import debug from 'debug'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail } from '../services/userService'

const log = debug('globant:auth')
const router = Router()

/**
 * 1. User auth
 *    if login send a token
 *    else 401
 */
router.post('/login', async (req, res) => {
  // const body = req.body
  const { email, password } = req.body
  log(email, password)

  const user = await findUserByEmail(email)

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({
      message: 'Wrong credentials'
    })
  }

  const token = jwt.sign({
    email: user.email,
    username: user.username
  }, process.env.JWT_SECRET)

  res.send({
    message: 'login: ok',
    token
  })
})

export default router
