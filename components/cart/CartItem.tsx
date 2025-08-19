import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiTrash2 } from 'react-icons/fi'

import { CartItem as CartItemProps, useCart } from '@/context/CartContext'
import QuantitySelector from '@/components/menu/QuantitySelector'

const CartItem: React.FC<CartItemProps> = (item) => {
  const { removeFromCart } = useCart()

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap items-center gap-4 bg-white rounded-2xl shadow p-4"
    >
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-lg object-cover w-16 h-16 sm:w-20 sm:h-20"
      />

      <div className="flex-1 min-w-[180px]">
        <h2 className="font-medium">{item.name}</h2>
        <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
        <QuantitySelector
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      </div>

      <div className="self-start sm:self-center">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FiTrash2
            size={18}
            className="lg:size-5"
          />
        </button>
      </div>
    </motion.div>
  )
}

export default CartItem
