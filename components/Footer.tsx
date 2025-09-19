import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow mt-4">
      <div className="container flex justify-center p-4 text-gray-700">
        <p className="">
          &copy; {new Date().getFullYear()} Rueby's Cuisine. All rights
          reserved. &nbsp;
        </p>
        <p>
          Developed by
          <a
            href="https://chidiebereuzoma.dev"
            className="text-blue-500 hover:underline"
          >
            &nbsp; Chidiebere Uzoma
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
