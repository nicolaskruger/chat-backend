import { Router } from "express";
import { msgRouter } from "./msgRouter";
import { userRouter } from "./userRouter";

const router = Router()

router.use("/user", userRouter)
router.use("/msg", msgRouter)

export { router }