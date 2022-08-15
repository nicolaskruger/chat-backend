import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"
import { env } from "process"
import { hashPassword } from "./hashPassword"

type UserDto = {
    name: string,
    password: string
}

const createUserService = async ( user:UserDto ) => {
    const prisma = new PrismaClient();
    const { password } = user;
    const _hashPassword = await hashPassword(password)
    
    const data: UserDto = {
        name: user.name,
        password: _hashPassword
    }

    await prisma.user.create({
        data: data
    })

    return data;
}

export {createUserService}
