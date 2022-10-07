import React, {useState}from 'react'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }
  
    return (
      <div className='bg-[#0D0D2B]'>
      <div className='text-white flex justify-between items-center h-[52px] px-4 mx-auto max-w-[1240px]'>
        <img src='images/Logo.png' alt='.' className='w-[40px] h-[40px]' />
          <h1 className='w-full h-[22px] flex uppercase font-sans font-[600] text-[18px]'>crappo</h1>
          <ul className='hidden md:flex'>
            <li className='p-4'><a href=''>Products</a></li>
            <li className='p-4'><a href=''>Features</a></li>
            <li className='p-4'><a href=''>About</a></li>
            <li className='p-4'><a href=''>Contact</a></li>
            <li className='p-4'><a href=''>Login</a></li> 
            <li className='p-4'><a href=''>|</a></li>
            <button className='bg-[#3671E9] rounded-[32px] w-[130px] h-[52px] mt-[10px]'>Register</button>
          </ul>
          
          <div onClick={handleNav} className='block md:hidden lg:hidden'>
           {!nav ? <AiOutlineMenuUnfold size={30}/> : <AiOutlineClose size={30} />}
        
          <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[90%] border-r h-full border-gray-900 bg-[#0D0D2B] ease-in-out duration-500'}>
          <div className='flex flex-row items-center'>
          <img src='images/Logo.png' alt='.' className='w-[40px] h-[40px]' />
          <h1 className='w-full h-[22px] flex uppercase font-sans font-[600] text-[18px]'>crappo</h1>
          </div>
            <ul className='pt-12 p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'><a href=''>Products</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>Features</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>About</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>Contact</a></li>
            <li className='p-4'><a href=''>Login</a></li>
            </ul>
            </div>
          </div>
      </div>
      </div>
    )
  }
  

export default Navbar