import { NextFunction, Request, Response } from "express";
import { findUserByPageService } from "./findUserByPageService";

type Page = {
    page: number,
    size: number
}

const findUserByPageUseCase =async (req:Request, res: Response, next: NextFunction) => {
    const { page, size } = req.query;

    if ( !page ) return next({ message: "page not be null" }) 
    if ( !size ) return next({ message: "size not be null" }) 


    const pager: Page = {
        page: Number(page),
        size: Number(size)
    }

    return res.json(await findUserByPageService(pager))
}

export {
    findUserByPageUseCase
}