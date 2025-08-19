'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import logoImage from '@/assets/images/site-logo.png'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

// const cartCount = 2 // Replace with actual cart count logic
const Header: React.FC = () => {
  const { cart } = useCart()
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `hover:text-gray-900 ${
      pathname === href ? 'font-bold underline text-primary' : 'text-gray-700'
    }`

  return (
    <header className="header-gradient shadow sticky top-0 z-50">
      <div className="w-full flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link
            href="/"
            className={pathname === '/' ? 'underline' : ''}
          >
            <Image
              src={logoImage}
              alt="Ruby's Cuisine"
              priority
              width={100}
              height={50}
            />
          </Link>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden flex gap-4 items-center">
          <Link
            href="/cart"
            className={`text-gray-700 hover:text-gray-900 flex items-center relative ${linkClass(
              '/cart'
            )}`}
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingCart size={36} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount} // re-trigger animation when number changes
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                }}
                className="absolute flex items-center justify-center -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 font-bold rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/menu"
                className={`text-gray-700 hover:text-gray-900 ${linkClass(
                  '/menu'
                )}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`text-gray-700 hover:text-gray-900 flex items-center relative ${linkClass(
                  '/cart'
                )}`}
                onClick={() => setMenuOpen(false)}
              >
                <FiShoppingCart size={30} />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount} // re-trigger animation when number changes
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                    }}
                    className="absolute flex items-center justify-center -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 font-bold rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-gray-900 ${linkClass(
                  '/contact'
                )}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40 p-4"
          >
            {/* X Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  href="/menu"
                  className={`text-gray-700 hover:text-gray-900 ${linkClass(
                    '/menu'
                  )}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`text-gray-700 hover:text-gray-900 flex items-center relative ${linkClass(
                    '/cart'
                  )}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <FiShoppingCart size={20} />
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount} // re-trigger animation when number changes
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 20,
                      }}
                      className="absolute flex items-center justify-center -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 font-bold rounded-full"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`text-gray-700 hover:text-gray-900 ${linkClass(
                    '/contact'
                  )}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
        {menuOpen && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
