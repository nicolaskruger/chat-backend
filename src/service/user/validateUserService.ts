type UserDto = {
    name: string,
    password: string
}

const validateUserService = (user: UserDto) => {

    if (!user) throw new Error("user can't be null")
    
    const keys = ["name", "password"] as (keyof UserDto)[]

    console.log(keys)

    keys.forEach(key => {
        if (!user[key]) {
            throw new Error(`user ${key} canot be null`)
        }
    })
}

export {
    validateUserService
}
