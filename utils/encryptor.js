import bcrypt from 'bcryptjs'
const saltRound = 8

export const hash = async (value) => {
    try {
        const salt = await bcrypt.genSalt(saltRound);
        return await bcrypt.hash(value, salt)
    } catch (error) {
        throw error
    }
}

export const compare = async (value, hash) => {
    try {
        return await bcrypt.compare(value, hash)
    } catch (error) {
        throw error
    }
}