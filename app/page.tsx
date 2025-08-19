import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import customerIconImage from '@/assets/images/customer-icon.png'
import browseFoodMenuImage from '@/assets/images/browse-food-menu.jpg'
import checkoutOrderImage from '@/assets/images/checkout2.jpg'
import foodDeliveryImage from '@/assets/images/delivery.jpg'

import TestimonialCard from '@/components/TestimonialCard'
import testimonials from '@/data/testimonials.json'
const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Rueby's Cuisine</h1>
            <p className="text-xl mb-6">
              Order fresh, tasty meals delivered to your door!
            </p>
            <Link
              href="/menu"
              className="px-6 py-3 bg-primary rounded-full font-semibold hover:bg-secondary transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center md:text-left mb-8 text-primary">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <Image
              src={browseFoodMenuImage}
              alt="Man ordering food online"
              className="mx-auto mb-6"
              priority
              width={200}
              height={200}
            />
            <h3 className="font-semibold mb-1">Browse Menu</h3>
            <p className="text-gray-600">Choose from a variety of meals.</p>
          </div>
          <div className="text-center">
            <Image
              src={checkoutOrderImage}
              alt="Man ordering food online"
              className="mx-auto mb-2"
              priority
              width={200}
              height={200}
            />

            <h3 className="font-semibold mb-1">Place an Order</h3>
            <p className="text-gray-600">Easy checkout with zero hassle</p>
            <p className="text-primary text-xs -mt-0.5">
              We will contact you for confirmation and payment.
            </p>
          </div>
          <div className="text-center">
            <Image
              src={foodDeliveryImage}
              alt="Enjoy"
              priority
              height={200}
              width={200}
              className="mx-auto mb-2"
            />
            <h3 className="font-semibold mb-1">Enjoy Your Meal</h3>
            <p className="text-gray-600">
              We cook and deliver to your doorstep.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 bg-background">
        <h2 className="text-2xl font-bold text-center md:text-left mb-8 text-primary">
          What Our Customers Say
        </h2>
        <div
          className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center`}
        >
          {testimonials.length === 1 ? (
            <div className="max-w-xl w-full mx-auto">
              <TestimonialCard {...testimonials[0]} />
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default HomePage
