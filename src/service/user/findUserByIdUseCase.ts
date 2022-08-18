import { NextFunction, Request, Response } from "express";
import { findUserByIdService } from "./findUserByIdService";

const findUserByIdUseCase =async (req:Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        return res.json(await findUserByIdService(id))
    } catch (error) {
        next({
            message: "user not found"
        })
    }

}

export {
    findUserByIdUseCase
}