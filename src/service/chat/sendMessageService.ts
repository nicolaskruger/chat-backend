import { PrismaClient } from "@prisma/client"

type UserDto = {
    id: number
}

const sendMessageService =async (me: UserDto, recieverId: number, message: string) => {
    
    const prisma = new PrismaClient()

    const reciever = prisma.user.findFirst({
        where: {
            id: recieverId
        }
    })

    if(!reciever) throw new Error("reciever not found")

    await prisma.chat.create({
        data: {
            message,
            senderId: me.id,
            reciverId: recieverId
        }
    })

}

export {
    sendMessageService
}