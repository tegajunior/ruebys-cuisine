import { z } from 'zod'

export const newItemSchema = z.object({
  quantity: z.number().min(10, 'Minimum quantity for new items is 10'),
})

export const updateItemSchema = z.object({
  changeAmount: z.number().min(1, 'Change amount must be at least 1'),
})
