import React from 'react'
import Image from 'next/image'
import QuantitySelector from './QuantitySelector'
import type { MenuItem as MenuItemType } from '@/types'

const MenuItem: React.FC<MenuItemType> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  minimumOrder,
}) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-xl bg-white shadow-sm hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Food Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--color-primary)' }}
        >
          {name}
        </h3>

        <p className="text-gray-600 flex-grow leading-relaxed mb-4">
          {description}
        </p>

        <p
          className="text-lg font-semibold mb-4"
          style={{ color: 'var(--color-accent)' }}
        >
          ₦{parseFloat(price.toString()).toFixed(2)}
        </p>

        {/* Client-side quantity & cart logic */}
        <QuantitySelector
          id={id}
          name={name}
          price={price}
          imageUrl={imageUrl}
          minimumOrder={minimumOrder}
        />
      </div>
    </div>
  )
}

export default MenuItem
