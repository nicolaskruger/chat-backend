import { Router } from "express";

const msgRouter = Router()

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

msgRouter.post("/", async (req, res) => {
    return res.status(200)
})

export {
    msgRouter
}