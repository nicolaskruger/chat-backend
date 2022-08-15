import { hash } from "bcrypt"
import { env } from "process";

const hashPassword = async (password: string) => {
    const HASH = env.HASH || '';
    return await hash(password + HASH, 10)
}

export {
    hashPassword
}