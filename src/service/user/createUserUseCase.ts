import { NextFunction, Request, Response } from "express";
import {createUserService } from "./createUserService"

type UserDto = {
    name: string,
    password: string
}

const createUserUseCase = async (req:Request, res: Response, next: NextFunction) => {
    const user = req.body as UserDto
    
    
    if(!user) 
        return next({
            message: "user can't be null",
            status: 400
        })

    const keys = ["name", "password"] as (keyof UserDto)[]
    
    console.log(keys)

    keys.forEach( key => {
        if(!user[key]){
            return next({
                message: `user ${key} canot be null`,
                status: 400    
            })
        }
    })

    try {
        return res.json(
            await createUserService(user)
        )
    } catch (error) {
        return next(
            {
                status: 400,
                message: "can't create user !!!"
            }
        )
    }

}

export {createUserUseCase}