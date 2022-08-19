import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { sendMessageUseCase } from "../service/chat/sendMessageUseCase";

const msgRouter = Router()

msgRouter.use(ensureAuthenticated)

msgRouter.get("/prev", async (req, res) => {
    return res.json({
            msg: [""]
    })
})

msgRouter.get("/next", async (req, res) => {
    return res.json({
        msg: [""]
    })
})

msgRouter.post("/", sendMessageUseCase)

export {
    msgRouter
}