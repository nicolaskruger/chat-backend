import { PrismaClient } from "@prisma/client";

type Page = {
    page: number,
    size: number
}

const findUserByPageService = async (pager:Page) => {
    const { page, size } = pager;

    const prisma = new PrismaClient();

    const users = await prisma.user.findMany(
        {
            take: size,
            skip: page*size
        }
    )

    return {
        users,
        page
    }
}

export {
    findUserByPageService
}