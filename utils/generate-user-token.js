import { sign } from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const generateUserToken = ({ id, role }) => {
    if (!id || !role) { throw new Error("Payload not valid") }
    return sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '2d' })
}

export default generateUserToken