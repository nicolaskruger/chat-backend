import { Router } from "express";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    return res.status(200).json({
        token: "token"
    })
})

userRouter.post('/', async (req, res) => {
    return res.status(201).json({
        name: "name"
    })
})

export {
    userRouter
}