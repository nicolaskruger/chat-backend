import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"; 
import { env } from "process";

const ensureAuthenticated = async (req:Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    
    const token = authorization?.replace('Bearer ', '').trim() || '';
    
    try {
        const decode = jwt.verify(
            token,
            env.HASH || ''
        )

        const { name } = decode as { name: string }

        const prisma = new PrismaClient()

        const user = await prisma.user.findFirstOrThrow(
            {
                where: {
                    name
                }
            }
        )

        req.user = user

        next()

    } catch (error) {
        return res.json({
            message: "token error"
        })
    }
}