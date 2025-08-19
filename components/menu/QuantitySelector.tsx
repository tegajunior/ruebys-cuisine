'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCart } from '@/context/CartContext'
import CartIconWithBadge from '@/components/cart/CartIconWithBadge'
import { FiMinus, FiPlus } from 'react-icons/fi'
import {
  newItemSchema,
  updateItemSchema,
} from '@/models/validation/validationSchema'

interface QuantitySelectorProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

type NewItemFormData = z.infer<typeof newItemSchema>
type UpdateItemFormData = z.infer<typeof updateItemSchema>

const MIN_QUANTITY = 10

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  const {
    register: registerNew,
    handleSubmit: handleSubmitNew,
    formState: { errors: errorsNew },
  } = useForm<NewItemFormData>({
    resolver: zodResolver(newItemSchema),
    defaultValues: { quantity: MIN_QUANTITY },
  })

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    formState: { errors: errorsUpdate },
    reset: resetUpdateForm,
  } = useForm<UpdateItemFormData>({
    resolver: zodResolver(updateItemSchema),
    defaultValues: { changeAmount: 1 },
  })

  const { addToCart, cart, updateCartItem, removeFromCart } = useCart()
  const existingItem = cart.find((item) => item.id === id)
  const currentQuantity = existingItem?.quantity ?? null

  const [infoMessage, setInfoMessage] = useState<string | null>(null)

  // Auto-hide info message
  useEffect(() => {
    if (infoMessage) {
      const t = setTimeout(() => setInfoMessage(null), 2500)
      return () => clearTimeout(t)
    }
  }, [infoMessage])

  const onAdd = (data: NewItemFormData) => {
    addToCart({ id, name, price, quantity: data.quantity, imageUrl })
  }

  const onUpdate = (data: UpdateItemFormData, increase: boolean) => {
    if (!existingItem) return
    const currentQty = existingItem.quantity
    const change = data.changeAmount

    if (increase) {
      updateCartItem(id, change)
      return
    }

    // ---- Decrease branch ----
    if (currentQty === MIN_QUANTITY) {
      setInfoMessage(`You can only order from ${MIN_QUANTITY} upwards`)
      removeFromCart(id)
      return
    }

    if (change >= currentQty) {
      removeFromCart(id)
      return
    }

    const nextQty = currentQty - change

    if (nextQty < MIN_QUANTITY) {
      const deltaToMin = MIN_QUANTITY - currentQty
      updateCartItem(id, deltaToMin)
      setInfoMessage(`You can only order from ${MIN_QUANTITY} upwards`)
      return
    }

    updateCartItem(id, -change)
  }

  return (
    <motion.div
      layout
      className="flex flex-col gap-2 md:gap-3 mt-4"
      transition={{ layout: { duration: 0.3, type: 'spring' } }}
    >
      <AnimatePresence mode="wait">
        {!existingItem ? (
          // ADD TO CART FORM
          <motion.form
            key="add-form"
            onSubmit={handleSubmitNew(onAdd)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 w-full"
          >
            <input
              type="number"
              {...registerNew('quantity', { valueAsNumber: true })}
              className="w-16 border rounded px-2 py-1 text-center"
            />
            {errorsNew.quantity && (
              <span className="text-red-500 text-sm">
                {errorsNew.quantity.message}
              </span>
            )}
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition w-full"
            >
              Add to Cart
            </button>
          </motion.form>
        ) : (
          // UPDATE ITEM CONTROLS
          <motion.form
            key="update-controls"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex justify-between items-center w-full"
          >
            <div className="flex items-center gap-2">
              <FiPlus
                className="bg-gray-200 border-0 p-1 cursor-pointer rounded"
                size={32}
                onClick={handleSubmitUpdate((data) => onUpdate(data, true))}
              />
              <input
                type="number"
                {...registerUpdate('changeAmount', { valueAsNumber: true })}
                className="w-16 border rounded px-2 py-1 text-center"
              />
              {errorsUpdate.changeAmount && (
                <span className="text-red-500 text-sm">
                  {errorsUpdate.changeAmount.message}
                </span>
              )}
              <FiMinus
                className="bg-gray-200 border-0 p-1 cursor-pointer rounded"
                size={32}
                onClick={handleSubmitUpdate((data) => onUpdate(data, false))}
              />
            </div>
            <motion.div
              key={currentQuantity}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <CartIconWithBadge cartCount={currentQuantity!} />
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Info Message - always rendered outside existingItem */}
      <AnimatePresence>
        {infoMessage && (
          <motion.div
            key="info-msg"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-md"
          >
            {infoMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default QuantitySelector
