import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { loginUserService } from "./loginUserService";
import { validateUserService } from "./validateUserService";

type UserDto = {
    name: string,
    password: string
}

const loginUserUseCase = async (req:Request, res: Response, next: NextFunction) => {
    const user = req.body as UserDto;

    try {
        validateUserService(user)
        return res.json(
            await loginUserService(user)
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
    loginUserUseCase
}