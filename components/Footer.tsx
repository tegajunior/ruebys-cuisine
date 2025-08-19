import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow mt-4">
      <div className="container mx-auto text-center p-4">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Rueby's Cuisine. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
