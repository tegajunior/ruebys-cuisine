'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '@/components/UI/FormInput'
import { FiUser, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// ✅ Validation schema with Zod
const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(5, 'Message must be at least 5 characters'),
})

type ContactFormValues = z.infer<typeof ContactSchema>

export default function ContactPage() {
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // 🔗 Send to your API route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setToast({ type: 'success', message: '✅ Message sent successfully!' })
        reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error(error)
      setToast({
        type: 'error',
        message: '❌ Something went wrong. Try again.',
      })
    } finally {
      setTimeout(() => setToast(null), 5000)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have questions, feedback, or just want to reach out? Fill out the form
        below or connect with us via social media.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormInput
          label="Name"
          register={register('name')}
          error={errors.name?.message}
          icon={FiUser}
        />

        <FormInput
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email?.message}
          icon={FiMail}
        />

        <FormInput
          label="Phone (Optional)"
          type="tel"
          register={register('phone')}
          error={errors.phone?.message}
          icon={FiPhone}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <div className="relative mt-1">
            <textarea
              {...register('message')}
              rows={4}
              className="w-full pl-10 pr-3 py-2 border rounded-xl focus:ring-2 focus:ring-[#ff6f61] focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
            <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-2xl text-white font-semibold transition ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#ff6f61] hover:bg-[#e85a4f]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social media links */}
      {/* Social media links */}
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-2">Connect with us</h2>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://wa.me/+2348149493000"
            target="_blank"
            className="text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={28} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaFacebook size={28} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram size={28} />
          </Link>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 px-4 py-3 rounded-xl shadow-lg text-white ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
