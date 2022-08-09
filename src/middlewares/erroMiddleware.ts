import { NextFunction, Request, Response } from "express"

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return res.status(400).json({
            msg: error.message
        })
    }

    return res.status(500).json({
        msg: "interna server erro"
    })
}