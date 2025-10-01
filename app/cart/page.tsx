'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import CartItem from '@/components/cart/CartItem'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart } = useCart()

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl text-primary font-bold mb-2">Your Cart</h1>
      <p className="text-secondary font-semibold mb-6 -mt-3">
        {cart.length} item{cart.length !== 1 && 's'} in your cart
      </p>

      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <p className="text-lg font-medium mb-4">Your cart is empty</p>
          <Link
            href="/menu"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
          >
            Continue Shopping
          </Link>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <CartItem
                  {...item}
                  key={item.id}
                />
              ))}
            </AnimatePresence>

            {/* Continue Shopping Button for mobile view */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="md:hidden mt-6"
            >
              <Link
                href="/menu"
                className="block text-center bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow p-6 h-fit flex flex-col gap-4"
          >
            <h2 className="text-lg  text-primary font-semibold">
              Order Summary
            </h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-500">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-primary text-center text-white py-3 rounded-full hover:bg-primary/90 transition"
            >
              Checkout
            </Link>

            {/* Continue Shopping Button for desktop view */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <Link
                href="/menu"
                className="block text-center bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
