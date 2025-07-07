import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
const NavBar = () => {
  
  const [menuOpen,setMenuOpen] = useState(false)

  const navItems = ['home','about','source'];


  
  return (
    <div>
      <nav className='bg-white shadow-md py-3 px-4 sticky top-0 z-50 flex justify-between items-center'>
        <div className='text-lg font-bold text-blue-600'>
          Slinky
        </div>
        
          <ul className='hidden md:flex space-x-6 text-gray-700'>
          {
            navItems.map(item => {
              return (
                <li key={item} className='hover:text-blue-600 cursor-pointer'>
                  {item}
                </li>
              )
            })
          }
        </ul>
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} />:<Menu size={24} />}
          </button>
        </div>
      </nav>
        {
          menuOpen && <ul className='md:hidden bg-white mt-2 space-y-2 px-4 border-b shadow text-gray-700'>
          {
            navItems.map(item => {
              return (
                <li key={item} className='hover:text-blue-600 cursor-pointer'>
                  {item}
                </li>
              )
            })
          }
        </ul>
        }
    </div>
  )
}

export default NavBar