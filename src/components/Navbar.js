import React, {useState}from 'react'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }
  
    return (
      <div className='text-white flex justify-between items-center h-[52px] px-4 mx-auto max-w-[1240px]'>
        <img src='images/Logo.png' alt='.' className='w-[40px] h-[40px]' />
          <h1 className='w-full h-[22px] flex uppercase font-sans font-[600] text-[18px]'>crappo</h1>
          <ul className='hidden md:flex'>
            <li className='p-4'><a href=''>Products</a></li>
            <li className='p-4'><a href=''>Features</a></li>
            <li className='p-4'><a href=''>About</a></li>
            <li className='p-4'><a href=''>Contact</a></li>
            <button className='bg-[#3671E9] w-[130px] h-[52px] rounded-sm'>Register</button>
          </ul>
          
          <div onClick={handleNav} className='block md:hidden lg:hidden'>
           {!nav ? <AiOutlineMenuUnfold size={30}/> : <AiOutlineClose size={30} />}
        
          <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] border-r h-full border-gray-900 bg-[#000300] ease-in-out duration-500'}>
          <h1 className='w-full text-3xl m-4 font-bold text-[#00df9a] flex'>NATUS05</h1>
            <ul className='pt-12 p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'><a href=''>Home</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>Company</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>Resources</a></li>
            <li className='p-4 border-b border-gray-600'><a href=''>About</a></li>
            <li className='p-4'><a href=''>Contact</a></li>
            </ul>
            </div>
          </div>
      </div>
    )
  }
  

export default Navbar