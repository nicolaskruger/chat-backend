import { Router } from "express";
import { userRouter } from "./userRouter";

const router = Router()

router.use("/user", userRouter)
router.use("/msg", )

export { router }