import { NextFunction, Request, Response } from "express";
import { sendMessageService } from "./sendMessageService";

type DataDto = {
    recieverId: number,
    message: string
}

const sendMessageUseCase = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const { message, recieverId } = req.body as DataDto        

        return res.json(
            await sendMessageService(
                    user,
                    recieverId,
                    message
                )
        )

    } catch (error) {
        const err = error as Error
        return next(
            {
                status: 400,
                message: err.message
            }
        )
    }
}

export {
    sendMessageUseCase
}
