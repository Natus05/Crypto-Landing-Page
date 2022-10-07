import React from 'react'

function Calculate() {
  return (
    <>
    <div className='w-[942px] h-[371px] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-lg mx-auto mt-[64px] flex flex-col'>
           <section className='h-[155px] w-[942px] flex flex-row ml-[48px] mt-[62px]'>
           <form className='w-[188px] h-[30px] text-[20px] text-[#0D0D2B]'>
           <input type="text" className="font-[400] underline" placeholder="Enter your hash rate" aria-label="Enter your hash rate" aria-describedby="basic-addon2" />
           </form>

           <select className="w-[200px] h-[38px] ml-[240px] form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>TH/s</option>
           </select>

           <button className='bg-[#3671E9] h-[59px] w-[147px] rounded-[32px] ml-[50.5px] text-white'>Calculate</button>
           </section>

           <section className='h-[216px]'>
             <p className='w-[260px] h-[24px] font-[500] text-[16px] leading-[150%] tracking-[0.04em] text-[#3671E9] ml-[48px] mt-[28px]'>ESTIMATED 24 HOUR REVENUE:</p>
             <p className='w-[624px] h-[48px] font-[700] text-[32px] leading-[150%] tracking-[0.04em] text-[#0D0D2B] ml-[48px] mt-[16px]'>0.055 130 59 ETH <span className='text-[#3671E9]'>($1275)</span></p>
             <p className='w-[516px] h-[28px] font-[400] text-[16px] leading-[150%] tracking-[0.01em] text-[#828282] ml-[48px] mt-[4px]'>Revenue will change based on mining difficulty and Ethereum price.</p>
           </section>
    </div>
    </>
  )
}

export default Calculate