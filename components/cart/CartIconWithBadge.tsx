import { FiShoppingCart } from 'react-icons/fi'
import { motion } from 'framer-motion'
interface Cart {
  cartCount: number
}

const CartIconWithBadge: React.FC<Cart> = ({ cartCount }) => {
  return (
    <div className="relative">
      <FiShoppingCart
        className="text-2xl text-gray-400"
        size={24}
      />
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
    </div>
  )
}
export default CartIconWithBadge
