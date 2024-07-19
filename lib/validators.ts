import {z} from 'zod'

export const messageSchema = z.object({
    message: z.string().min(2, {message: 'Message must be more than two characters'}).max(280, {message: 'Message must be less than 280 characters'})


})