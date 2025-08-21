'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconType } from 'react-icons'

type FormInputProps = {
  label: string
  register: any
  error?: string
  type?: string
  icon?: IconType
  min?: any
  name?: string
  placeholder?: string
}

export default function FormInput({
  label,
  register,
  error,
  type = 'text',
  icon: Icon,
  placeholder,
  min,
  name,
  ...rest
}: FormInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={18} />
          </span>
        )}
        <input
          {...register}
          type={type}
          min={min}
          placeholder={placeholder}
          className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition 
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
          {...rest}
        />
      </div>

      {/* Animated error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
