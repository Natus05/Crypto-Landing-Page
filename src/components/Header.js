import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
<div className='bg-[#0D0D2B] mx-[0] mt-[0px]'>
 
  <Navbar />

  <div className='grid lg:grid-cols-2'>
    <div id='value-proposition' className='max-w-[588px] mt-[40px] xl:ml-[120px] xl:mt-[146px] mx-auto lg:ml-[50px]'>
      <div id='info' className='max-w-[365px] h-[40px] flex flex-row bg-white/[0.1] rounded-[32px]'>
        <div className='w-[113px] h-[32px] bg-white rounded-[36px] flex flex-row items-start py-[4px] px-[16px]'>
            <div className='uppercase font-sans not-italic font-[500] text-[16px] leading-[150%] tracking-[0.04em] w-[81px] h-[24px] text-[#0D0D2B]'>75% save</div>
        </div>
            <div className='text-white w-[221px] h-[28px] ml-[20px] my-auto'>
               For the Black Friday weekend
            </div>
      </div>
      <p className='text-white leading-[76px] text-[64px] font-sans font-[700] mt-[28px]'>Fastest & secure platform to invest in crypto</p>
      <p className='leading-[28px] text-[#E0E0E0] tracking-[0.01em] font-[16px] font-[400] w-[435px] h-[56px] mt-[24px]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
      <button className='flex flex-row justify-center items-center py-[16px] pr-[16px] pl-[12px] gap-[24px] w-[202px] h-[64px] mt-[32px] bg-[#3671E9] rounded-[32px]'>
         <div className='w-[106px] h-[27px] font-sans font-[500] font-[18px] leading-[150%] text-center text-white'>Try for FREE</div>
         <div className='w-[32px] h-[32px] flex-none order-1 bg-white rounded-full'>
              <img src='images/Arrow.png' />
         </div>
      </button>
    </div>
    <div id='illustration' className='max-w-[604px] h-[585.15px] mt-[40px] xl:mt-[63px] mx-auto xl:mr-[120px] lg:mr-[50px]'> 
    <img className='justify-self-center' src='images/Illustration.png' />
    </div>
  </div>

</div>

  )
}

export default Header