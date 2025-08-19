'use client'

import React, { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import FormInput from '@/components/UI/FormInput'
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiMail,
  FiCalendar,
  FiClock,
} from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const CheckoutSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  email: z.string().email('Invalid email address'),
  deliveryTime: z.string().min(1, 'Delivery time is required'),
  deliveryDate: z.string().refine(
    (val) => {
      const chosen = new Date(val)
      const today = new Date()
      const minDate = new Date(today.setDate(today.getDate() + 14))
      return chosen >= minDate
    },
    { message: 'Delivery date must be at least 2 weeks from today' }
  ),
})

type CheckoutFormValues = z.infer<typeof CheckoutSchema>

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutSchema),
  })

  const onSubmit = async (data: CheckoutFormValues) => {
    // Format delivery time to AM/PM
    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number)
      const date = new Date()
      date.setHours(hours, minutes)
      return date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    }

    const formattedTime = formatTime(data.deliveryTime)

    try {
      const responses = await Promise.all([
        fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: data.email,
            subject: 'Order Confirmation',
            customer: {
              firstName: data.firstName,
              lastName: data.lastName,
              phone: data.phone,
              email: data.email,
              address: data.address,
              deliveryDate: data.deliveryDate,
              deliveryTime: formattedTime,
            },
            cart,
          }),
        }),
        fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: process.env.NEXT_PUBLIC_SALES_EMAIL,
            subject: 'New Order Received',
            customer: { ...data, deliveryTime: formattedTime },
            cart,
          }),
        }),
      ])

      // ✅ Check if both succeeded
      if (responses.every((res) => res.ok)) {
        setToast({
          type: 'success',
          message: '🎉 Order placed successfully! Check your email.',
        })
        clearCart()
        reset()
        setTimeout(() => {
          setToast(null)
          router.replace('/menu')
        }, 3000)
      } else {
        throw new Error('One or more emails failed to send')
      }
    } catch (err) {
      console.error('Email sending failed:', err)
      setToast({
        type: 'error',
        message:
          '❌ Something went wrong sending your order confirmation. Please try again.',
      })
      setTimeout(() => {
        setToast(null)
      }, 5000) // ⏳ auto-hide after 5s
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormInput
          label="First Name"
          register={register('firstName')}
          error={errors.firstName?.message}
          icon={FiUser}
        />
        <FormInput
          label="Last Name"
          register={register('lastName')}
          error={errors.lastName?.message}
          icon={FiUser}
        />
        <FormInput
          label="Phone Number"
          register={register('phone')}
          error={errors.phone?.message}
          icon={FiPhone}
        />
        <FormInput
          label="Address"
          register={register('address')}
          error={errors.address?.message}
          icon={FiMapPin}
        />
        <FormInput
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email?.message}
          icon={FiMail}
        />
        <FormInput
          label="Delivery Date"
          type="date"
          register={register('deliveryDate')}
          error={errors.deliveryDate?.message}
          icon={FiCalendar}
          min={
            new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0]
          } // ⏳ sets min selectable date to today + 14 days
        />

        <FormInput
          label="Delivery Time"
          type="time"
          register={register('deliveryTime')}
          error={errors.deliveryTime?.message}
          icon={FiClock}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-2xl text-white font-semibold cursor-pointer transition
    ${
      isSubmitting
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-[#ff6f61] hover:bg-[#e85a4f]'
    }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span>Placing Order...</span>
            </div>
          ) : (
            'Place Order'
          )}
        </button>
      </form>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 px-4 py-3 rounded-xl shadow-lg text-white ${
              toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
