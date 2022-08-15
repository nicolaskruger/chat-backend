import jwt from "jsonwebtoken"
import { env } from "process"

const generateTokenwithName = (name: string) => {
    return jwt.sign({name}, env.HASH || '')
}

export {generateTokenwithName}