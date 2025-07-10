import { useState } from 'react'
import { Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [['home', '/'], ['about', '/about']];

  const githubRepo = 'https://github.com/vishwaravi/slinky'


  return (
    <div>
      <nav className='bg-white shadow-md py-5 px-4 sticky top-0 z-50 flex justify-between items-center'>
        <div className='text-lg font-bold text-blue-600'>
          Slinky
        </div>

        <ul className='hidden md:flex space-x-6 text-gray-700'>
          {
            navItems.map(([name, path]) => {
              return (
                <li key={name}>
                  <Link className='hover:text-blue-600 cursor-pointer' to={path} key={name}>{name}</Link>
                </li>

              )
            })
          }
          <li><a target='_blank' href={githubRepo}><Github /></a></li>
        </ul>
        <div className='md:hidden flex space-x-6'>
          <a target='_blank' href={githubRepo}><Github /></a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {
        menuOpen && <ul className='md:hidden bg-white mt-2 space-y-2 px-4 border-b shadow text-gray-700 py-4'>
          {
            navItems.map(([name, path]) => {
              return (
                <li>
                  <Link className='hover:text-blue-600 cursor-pointer' to={path} key={name}>{name}</Link>
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