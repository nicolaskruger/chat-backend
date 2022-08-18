import { PrismaClient } from "@prisma/client"

const findUserByIdService = async (id: number) => {
    const prisma = new PrismaClient()
    return await prisma.user.findFirstOrThrow({
        where: {
            id
        }
    })
}

export {
    findUserByIdService
}