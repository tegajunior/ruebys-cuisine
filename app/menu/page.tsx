import React from 'react'
import Link from 'next/link'
import { MenuItem as MenuItemType } from '@/types'

import MenuItem from '@/components/menu/MenuItem'
import ImageSlideshow from '@/components/image/ImageSlideShow'

import eforiroSoup from '@/assets/images/efo-riro.jpg'
import afangSoup from '@/assets/images/Afang-img1.jpg'
import stew from '@/assets/images/stew.jpg'
import vegetableSoup from '@/assets/images/edikang-ikong-vegetable.jpg'
import ofeAkwu from '@/assets/images/ofe-akwu.png'
import egusiSoup from '@/assets/images/egusi-soup.jpg'
import bitterleafSoup from '@/assets/images/Bitterleaf soup-2.jpg'
import ohaSoup from '@/assets/images/oha-soup.jpg'
import ogbonnoSoup from '@/assets/images/Ogbono-soup-2.jpg'
import okraSoup from '@/assets/images/okra-soup-2.jpg'
import whiteSoup from '@/assets/images/white-soup-2.jpg'
import groundnutSoup from '@/assets/images/Groundnut-soup-1.jpg'
import pepperSoup from '@/assets/images/Pepper-soup with assorted beef.jpg'
import vegetableSauce from '@/assets/images/vegetable-sauce.jpeg'
import pepperStew from '@/assets/images/Pepper-stew.jpg'
import beefStew from '@/assets/images/Beef stew.jpg'
import fishStew from '@/assets/images/Fish stew.jpg'
import partyRice from '@/assets/images/party-rice.jpg'

import Head from 'next/head'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Menu - Rueby's Cuisine",
}

const MenuPage: React.FC = () => {
  const menuItems: MenuItemType[] = [
    {
      id: 1,
      name: 'Tomatoes Stew (2 liters)',
      description:
        'Classic Nigerian red stew with fresh tomatoes and zero colesterol soya oil + 10 piece of protein for 1 item added',
      price: 20000,
      imageUrl: stew,
      minimumOrder: 1,
    },
    {
      id: 2,
      name: 'Afang Soup (2 liters)',
      description:
        'Traditional vegetable soup with waterleaf and afang leaves + 10piece of protein for 1 item added',
      price: 25000,
      imageUrl: afangSoup,
      minimumOrder: 1,
    },
    {
      id: 3,
      name: 'Efo-riro (2 liters)',
      description:
        'Flavorful fresh spinach soup with locust beans and diced cowskin + 10piece of protein for 1 item added.',
      price: 20000,
      imageUrl: eforiroSoup,
      minimumOrder: 1,
    },
    {
      id: 4,
      name: 'Egusi Soup (2 liters)',
      description:
        'Rich, nutty melon seed soup with pumpkin(ugwu) vegetable + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: egusiSoup,
      minimumOrder: 1,
    },
    {
      id: 5,
      name: 'Vegetable Soup (2 liters)',
      description:
        'Fresh mixed pumpkin(ugwu) and waterleaf vegetables + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: vegetableSoup,
      minimumOrder: 1,
    },
    {
      id: 6,
      name: 'Banga stew (2 liters)',
      description:
        'Palm fruit stew with traditional spices + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: ofeAkwu,
      minimumOrder: 1,
    },
    {
      id: 7,
      name: 'Bitter leaf Soup (2 liters)',
      description:
        'Traditional bitter leaf with authentic Nigerian spices + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: bitterleafSoup,
      minimumOrder: 1,
    },
    {
      id: 8,
      name: 'Oha Soup (2 liters)',
      description:
        'Eastern delicacy with oha leaves and uziza + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: ohaSoup,
      minimumOrder: 1,
    },
    {
      id: 9,
      name: 'Ogbonno Soup (2 liters)',
      description:
        'Smooth draw soup made with ground ogbono seeds + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: ogbonnoSoup,
      minimumOrder: 1,
    },
    {
      id: 10,
      name: 'Okra Soup (2 liters)',
      description:
        'Fresh okra in a delicious, slimy Nigerian style + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: okraSoup,
      minimumOrder: 1,
    },
    {
      id: 11,
      name: 'White Soup - ofe nsala (2 liters)',
      description:
        'Light, peppery soup with no palm oil + 10 piece of assorted meat for 1 item added.',
      price: 25000,
      imageUrl: whiteSoup,
      minimumOrder: 1,
    },
    {
      id: 12,
      name: 'Groundnut Soup (2 liters)',
      description:
        'Creamy peanut-based soup with rich flavors + 10 piece of protein for 1 item added.',
      price: 20000,
      imageUrl: groundnutSoup,
      minimumOrder: 1,
    },
    {
      id: 13,
      name: 'Pepper Soup (2 liters)',
      description:
        'Spicy, aromatic broth perfect to satisfy your crave + assorted beef/goatmeat or catfish for 1 item added.',
      price: 25000,
      imageUrl: pepperSoup,
      minimumOrder: 1,
    },
    {
      id: 14,
      name: ' Vegetable Stew (2 litres)',
      description:
        'Garden-fresh vegetables in savory sauce + 10 piece of protein for 1 item added.',
      price: 25000,
      imageUrl: vegetableSauce,
      minimumOrder: 1,
    },
    {
      id: 15,
      name: 'Pepper Stew (2 liters)',
      description:
        'Spicy, flavorful stew with scotch bonnet peppers and onions + 10 piece of protein and 2 eggs for 1 item added.',
      price: 20000,
      imageUrl: pepperStew,
      minimumOrder: 1,
    },
    {
      id: 16,
      name: 'Beef Stew (2 liters)',
      description:
        'Rich beef stew with tender meat pieces + 10 piece of protein for 1 item added.',
      price: 25000,
      imageUrl: beefStew,
      minimumOrder: 1,
    },
    {
      id: 17,
      name: 'Fish Stew',
      description:
        'Delicious fish stew with shredded piece of fish and aromatic spices for 1 item added.',
      price: 20000,
      imageUrl: fishStew,
      minimumOrder: 1,
    },
    {
      id: 18,
      name: 'Party rice (10 packs minimum)',
      description:
        'Perfect for events, gatherings, and celebrations. Available option of rice include: Jollof rice, Fried rice, White rice, Coconut rice and Asun rice. Add-ons available: Extra protein, coleslaw, plantain',
      price: 3500,
      imageUrl: partyRice,
      minimumOrder: 10,
    },
  ]

  return (
    <div
      className="container mx-auto px-6 py-10"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Add Meta Tags for the Menu Page */}

      <Head>
        {/* Title for SEO */}
        <title>Menu - Rueby's Cuisine</title>

        {/* Meta description for the menu page */}
        <meta
          name="description"
          content="Browse the menu at Rueby's Cuisine for delicious Nigerian soups, stews, and party rice. From rich Egusi soup to flavorful Efo Riro, we have something for everyone."
        />

        {/* Open Graph Meta Tags for Facebook and social sharing */}
        <meta
          property="og:title"
          content="Menu - Rueby's Cuisine"
        />
        <meta
          property="og:description"
          content="Explore Rueby's Cuisine menu offering fresh Nigerian soups, stews, and party rice. We deliver right to your door in Abuja."
        />
        <meta
          property="og:image"
          content="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/RuebysCuisineFlyer.jpg"
        />
        <meta
          property="og:url"
          content="https://www.ruebyscuisine.food/menu"
        />
        <meta
          property="og:site_name"
          content="Rueby's Cuisine"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:locale"
          content="en_US"
        />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: "Rueby's Cuisine",
              description:
                "Browse the delicious Nigerian soups, stews, and party rice available on the Rueby's Cuisine menu. Order now for home delivery in Abuja. Our menu features delicious dishes like Egusi soup, Efo Riro, Afang soup, Oha soup, Okra soup, Ogbono soup, White soup (Ofe Nsala), Vegetable soup, Banga soup, and more.",
              logo: 'https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png',
              url: 'https://www.ruebyscuisine.food/menu',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Abuja',
                addressLocality: 'Abuja',
                addressRegion: 'FCT',
                postalCode: '901101',
                addressCountry: 'NG',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+2348149493000',
                contactType: 'Customer Service',
                areaServed: 'NG',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </Head>
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
            Browse our authentic Nigerian menu and order your favorite soups,
            stews, and party rice! From rich Egusi to flavorful Efo Riro and
            traditional Banga stew, every dish is prepared fresh using
            traditional cooking methods and quality ingredients. Each order
            includes 2 litres of delicious soup or stew plus 10 pieces of
            protein—perfect for you to enjoy throughout the week. Whether you're
            craving classic comfort soups or trying something new, we'll deliver
            homemade goodness straight to your door—hot, fresh, and ready to
            enjoy!
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
