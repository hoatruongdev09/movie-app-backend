import db from '../models'
import { hash, compare } from '../utils/encryptor'
import generateUserToken from '../utils/generate-user-token'

export const login = async (loginEmail, loginPassword) => {
    try {
        const user = await db.user.findOne({ where: { email: loginEmail }, raw: true })
        if (!user) {
            throw new Error("Email or password is not match")
        }
        const { password } = user
        if (!(await compare(loginPassword, password))) {
            throw new Error("Email or password is not match")
        }
        const token = generateUserToken(user)
        return `Bearer ${token}`
    } catch (error) {
        throw error
    }
}

export const register = async ({ email, firstName, lastName, password }) => {
    try {
        const [user, created] = await db.user.findOrCreate({
            where: { email: email },
            defaults: {
                email: email,
                first_name: firstName,
                last_name: lastName,
                password: await hash(password)
            }
        })
        if (!created) { throw new Error("email existed") }
        const token = generateUserToken(user)
        return `Bearer ${token}`
    } catch (error) {
        throw error
    }
}
