import { PrismaClient } from "@prisma/client";
import { generateTokenwithName } from "./generateTokenWithName";
import { hashPassword } from "./hashPassword";
import { compare } from "bcrypt";

type UserDto = {
    name: string,
    password: string
}

const loginUserService = async (user: UserDto) => {
    const { name, password } = user
    const _hashPassword = await hashPassword(password);

    const prisma = new PrismaClient()

    const _user = await prisma.user.findFirst(
        {
            where: {
                name: name
            }
        }
    );

    if(!_user)
        throw new Error("user does not exist");
    if(await compare(password, _user.password))
        throw new Error("password does not match")

    return {
        token: generateTokenwithName(name)
    }
}

export {
    loginUserService
}