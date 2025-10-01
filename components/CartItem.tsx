import React from 'react'

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    quantity: number
  }
  onRemove: (id: string) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const { id, name, price, quantity } = item

  return (
    <div className="bg-secondary flex justify-between items-center border-b py-4">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">Quantity: {quantity}</p>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-bold">
          ₦{(price * quantity).toFixed(2)}
        </span>
        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
