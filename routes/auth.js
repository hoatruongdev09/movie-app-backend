import * as controllers from '../controllers'

import { Router } from 'express'
const router = Router()

router.post('/register', controllers.register)
router.post('/login', controllers.login)

export default router