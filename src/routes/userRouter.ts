import { Router } from "express";
import { createUserUseCase } from "../service/user/createUserUseCase";
import { loginUserUseCase } from "../service/user/loginUserUseCase";

const userRouter = Router()

userRouter.get('/', async (req, res, next) => {
    return await loginUserUseCase(req, res, next)
})

userRouter.post('/', async (req, res, next) => {
    return await createUserUseCase(req, res, next)
})

export {
    userRouter
}