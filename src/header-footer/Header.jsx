import React, { useState } from 'react'
import "./header.css"
import { Link, NavLink } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=>{setToggle(!toggle)}
  return (
    <div className='bg-black/50'>
      <header className='md:flex border-b-[1px] border-gray-700 py-6 items-center text-lg text-white justify-between px-6 md:px-20'> 
      <div className="md:hidden flex justify-between">

      <NavLink className='block md:hidden' to="/">
       <div className="logo">
         <img className='w-32 md:w-48' src="./images/admin-ajax.png" alt="" />
        </div>
      </NavLink>


      <button onClick={handleToggle}>{toggle ?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>  
           
       : 
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
     </svg>
    }
    </button>



      </div>
      <NavLink className='hidden md:block' to="/">
       <div className="logo">
         <img className='w-32 md:w-48' src="./images/admin-ajax.png" alt="" />
        </div>
      </NavLink>


        <div className={`navigationMenu ${toggle ? 'block' : 'hidden'} md:block mt-4`}>
          <nav className='md:flex gap-6'>
            <NavLink to="/about">About </NavLink>


            <li className='flex cursor-pointer group relative items-center gap-[2px]'>Membership 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-[3px]">
             <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg> 
               
              <ul className='dropdownMenu z-20 w-[250px]'>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-easy-access">ELITE EASY ACCESS</NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-family-excersion">ELITE FAMILY EXCURSION </NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/about">ELITE MAXIMA HEALTH</NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-family-alternative">ELITE ALTERNATIVE</NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-privilege-access">ELITE PRIVILEGE ACCESS </NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-family-premium">ELITE FAMILY PREMIUM</NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-superiority-extension">ELITE SUPERIORITY EXTENSION</NavLink></li>
                <li className='px-4 text-sm py-2 hover:bg-gray-900/50'><NavLink to="/elite-ultimate-privilege">ELITE ULTIMATE PRIVILEGES</NavLink></li>
              </ul>
            </li>
            <li className='flex relative group items-center gap-[2px]'>Blog & News 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-[3px]">
             <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            <ul className='dropdownMenu w-[200px]'>
                 <li className='px-4 py-2'><NavLink to='/news/no-page'>Recent News</NavLink></li>
                <li className='px-4 py-2'><NavLink to={'/blogs'}>Blogs</NavLink> </li>
              </ul>
            </li>
            <NavLink to='/faq'>FAQ</NavLink>
            <br />
              <NavLink to="/contact">Contact</NavLink>
          </nav>
          <button
                   className="border-2 md:hidden md:text-lg text-sm mt-6 border-[#a38c1a] duration-500 text-white hover:bg-[#a38c1a] px-4 md:px-10 py-[2px] md:py-2">
                    <a href="https://www.thaielite-visa.com/apply-free-approval/">
                      APPLY NOW
                    </a>
               </button>
        </div>


        <div className="btn">
               <button
                   className="border-2 hidden md:block md:text-lg text-sm mt-6 border-[#a38c1a] duration-500 text-white hover:bg-[#a38c1a] px-4 md:px-10 py-[2px] md:py-2">
                    <a href="https://www.thaielite-visa.com/apply-free-approval/">
                      APPLY NOW
                    </a>
               </button>
        </div>
     </header>
    </div>
  )
}

export default Header
