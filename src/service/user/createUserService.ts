import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"
import { env } from "process"

type UserDto = {
    name: string,
    password: string
}

const createUserService = async ( user:UserDto ) => {
    const prisma = new PrismaClient();
    const HASH = env.HASH || '';
    const { password } = user;
    const hashPassword = await hash(password + HASH, 10)
    
    const data: UserDto = {
        name: user.name,
        password: hashPassword
    }

    await prisma.user.create({
        data: data
    })

    return data;
}

export {createUserService}
