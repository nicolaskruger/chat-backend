import { Router } from "express";
import { createUserUseCase } from "../service/user/createUserUseCase";
import { findUserByIdUseCase } from "../service/user/findUserByIdUseCase";
import { findUserByPageUseCase } from "../service/user/findUserByPageUseCase";
import { loginUserUseCase } from "../service/user/loginUserUseCase";

const userRouter = Router()

userRouter.get('/', async (req, res, next) => {
    return await loginUserUseCase(req, res, next)
})

userRouter.post('/', async (req, res, next) => {
    return await createUserUseCase(req, res, next)
})

userRouter.get('/:id/id', async (req, res, next) => {
    return await findUserByIdUseCase(req, res, next)
})

userRouter.get('/page', findUserByPageUseCase)

export {
    userRouter
}