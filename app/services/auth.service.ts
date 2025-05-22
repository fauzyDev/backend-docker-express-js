import User from "../models/user.model.ts"

export const userCreate = async (name: string, age: number, email: string, password: string) => {
    const user = await User.create({ name, age, email, password  })
    return user
} 