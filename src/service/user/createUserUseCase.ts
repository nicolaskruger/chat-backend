import { NextFunction, Request, Response } from "express";
import {createUserService } from "./createUserService"
import { validateUserService } from "./validateUserService";

type UserDto = {
    name: string,
    password: string
}

const createUserUseCase = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body as UserDto
        validateUserService(user)
        return res.json(
            await createUserService(user)
        )
    } catch (error) {
        return next(
            {
                status: 400,
                message: "can't create user !!!"
            }
        )
    }

}

export {createUserUseCase}