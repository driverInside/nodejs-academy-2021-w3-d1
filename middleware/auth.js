import debug from 'debug'
import jwt, {JsonWebTokenError} from 'jsonwebtoken'
import httpStatus, { HttpStatus } from 'http-status'

const log = debug('globant:auth-middleware')

const authUserMiddleware = (req, res, next) => {
  const authHeader = req.get('Authorization')
  const token = authHeader.replace('Bearer ', '')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    log(decoded)

    req.user = decoded
    next()
  } catch (error) {
    console.error(error)
    if (error instanceof JsonWebTokenError) {
      return res.status(401).send({
        message: 'tache huarache'
      })
    }

    return res.status(httpStatus[503]).json({
      message: 'lorem'
    })
  }
}

export default authUserMiddleware
