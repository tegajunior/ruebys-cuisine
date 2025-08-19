import React from 'react'
import MenuItem from '@/components/menu/MenuItem'
import ImageSlideshow from '@/components/image/ImageSlideShow'

import pizzaImage from '@/assets/images/pizza.jpg'
import burgerImage from '@/assets/images/burger.jpg'
import schnitzelImage from '@/assets/images/schnitzel.jpg'
import tomatoSaladImage from '@/assets/images/tomato-salad.jpg'
import Link from 'next/link'

const MenuPage: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      price: 9.99,
      imageUrl: pizzaImage,
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Juicy beef burger with lettuce and tomato',
      price: 8.99,
      imageUrl: burgerImage,
    },
    {
      id: 3,
      name: 'Schnitzel',
      description: 'Crispy breaded schnitzel',
      price: 12.99,
      imageUrl: schnitzelImage,
    },
    {
      id: 4,
      name: 'Salad',
      description: 'Fresh tomato salad',
      price: 7.99,
      imageUrl: tomatoSaladImage,
    },
  ]

  return (
    <div
      className="container mx-auto px-6 py-10"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Page Heading */}
      <h1
        className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-10"
        style={{ color: 'var(--color-primary)' }}
      >
        Explore Our Delicious Menu
      </h1>

      {/* Hero Section */}
      <div
        className="mb-12 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 rounded-2xl p-6 lg:p-10 shadow-md"
        style={{ background: 'var(--gradient-main)' }}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
          <ImageSlideshow />
        </div>

        {/* Text */}
        <div className="max-w-md text-center md:text-left text-white">
          <h3 className="mb-6 text-lg md:text-xl leading-relaxed">
            Browse our delicious menu and order your favorite meals online! From
            sizzling appetizers to hearty mains and indulgent desserts, every
            dish is crafted with fresh, high-quality ingredients. Whether you’re
            craving comfort food or something adventurous, we’ll deliver the
            flavor straight to your door — hot, fresh, and ready to enjoy.
          </h3>
          <Link
            href="#menu-grid"
            className="mt-4 px-6 py-3 font-semibold rounded-full shadow-md transition-all"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Menu Section Heading */}
      <h2
        className="text-2xl font-bold mb-6 text-center md:text-left"
        style={{ color: 'var(--color-primary)' }}
      >
        What’s on the Menu
      </h2>

      {/* Menu Grid */}
      <div
        id="menu-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
          >
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuPage
