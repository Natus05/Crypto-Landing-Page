import React from 'react'

function Footer() {
  return (
    <div className='bg-[#0D0D2B]  xl:mx-[120px] '>
        <div className='xl:mt-[80px] row mr-[40px]'>

      <div id="logo" className='col-12 col-lg-3 flex flex-row w-[135px] h-[40px] justify-between items-center'>
       <img src='images/Logo.png' alt='.' className='w-[40px] h-[40px]' />
       <h1 className='w-full h-[22px] flex uppercase font-sans font-[600] text-[18px] text-white'>crappo</h1>
      </div>

      <div id="quick_link" className='col-12 col-lg-3 text-white flex flex-col w-[200px] h-[244px] '>
        <h3>Quick Link</h3>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Features</a>
        <a href="/">Contact</a>
      </div>

      <div id='resources' className='col-12 col-lg-3 flex flex-col text-white w-[200px] h-[244px]'>
        <h3>Resources</h3>
        <a href="/">Download Whitepaper</a>
        <a href="/">Smart Token</a>
        <a href="/">Blockchain Explorer</a>
        <a href="/">Crypto API</a>
        <a href="/">Interest</a>
      </div>

      <div id="payment" className='col-12 col-lg-3 flex flex-col text-white w-[355px] h-[200px]'>
        <h3 className='text-[28px] font-[500] leading-[150%]'>We accept following payment systems</h3>
        <div className='flex flex-row'>
          <img src='images/Visa.png' alt='.' className='w-[96px] h-[64px]' />
          <img src='images/Mastercard.png' alt='.' className='w-[96px] h-[64px]' />
          <img src='images/Bitcoin.png' alt='.' className='w-[96px] h-[64px]' />
        </div>
      </div>
      
      </div>

      <div className='flex flex-row text-white row'>
        <p className='col-12 col-md-6'>©2021 CRAPPO. All rights reserved</p>
          <div className='flex flex-row col-12 col-md-6 gap-[34px] md:justify-end md:items-end'>
            <img src="images/facebook-f 1.png" alt="." className='w-[24px] h-[24px]' />
            <img src="images/instagram 1.png" alt="." className='w-[24px] h-[24px]' />
            <img src="images/youtube 1.png" alt="." className='w-[24px] h-[24px]' />
            <img src="images/twitter 1.png" alt="." className='w-[24px] h-[24px]' />
            <img src="images/linkedin 1.png" alt="." className='w-[24px] h-[24px]' />
          </div>
      </div>

    </div>
  )
}

export default Footer