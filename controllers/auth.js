import * as services from '../services'

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                code: -1,
                message: 'Missing payload'
            })
        }
        const token = await services.login(email, password)
        res.json({
            code: 1,
            message: 'success',
            token
        })
    } catch (error) {
        res.status(500).json({
            code: -1,
            message: error.message
        })
    }
}

export const register = async (req, res, next) => {
    try {
        const { email, password, lastName, firstName } = req.body
        if (!email || !password || !lastName || !firstName) {
            return res.status(400).json({
                code: 1,
                message: 'Missing payload'
            })
        }
        const token = await services.register({ email, password, lastName, firstName })
        res.json({
            code: 1,
            message: 'success',
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            code: -1,
            message: error.message
        })
    }
}

