import { PrismaClient } from "@prisma/client"

type UserDto = {
    id: number
}

const sendMessageService =async (me: UserDto, senderId: number, message: string) => {
    
    const prisma = new PrismaClient()

    await prisma.chat.create({
        data: {
            message,
            reciverId: me.id,
            senderId
        }
    })

}