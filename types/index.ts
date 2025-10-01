import Image from 'next/image'

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  imageUrl: any
  minimumOrder: number
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
}

export interface QuantitySelectorProps {
  id: number
  name: string
  price: number
  imageUrl: string
  minimumOrder?: number
}

export interface Order {
  id: string
  items: CartItem[]
  totalPrice: number
  createdAt: Date
}
