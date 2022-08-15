import { Router } from "express";
import { createUserUseCase } from "../service/user/createUserUseCase";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    return res.status(200).json({
        token: "token"
    })
})

userRouter.post('/', async (req, res, next) => {
    return await createUserUseCase(req, res, next)
})

export {
    userRouter
}