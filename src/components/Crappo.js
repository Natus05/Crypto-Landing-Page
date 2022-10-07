import React from 'react'

function Crappo() {
  return (
    <div className='max-w-[1440px] bg-[#0D0D2B]'>
      <div className='flex flex-row gap-[99px] max-w-[1200px] mt-[100px] mx-auto xl:mx-[120px]'>
        <div className='w-[334px] h-[92px] flex flex-row'>
          <img className='w-[80px] h-[80px]' src='images/Icon.png' />
          <div className='flex flex-col w-[230px] h-[92px] ml-[24px]'>
            <div className='w-[110px] h-[60px] font-sans font-[700] text-[40px] text-white leading-[150%]'>$30B</div>
            <div className='text-[#E0E0E0] leading-[20px] tracking-[0.01em] font-[400] font-[16px] font-sans w-[230px] h-[28px] mt-[4px]'>Digital Currency Exchanged</div>
          </div>
        </div>
        <div className='w-[334px] h-[92px] flex flex-row'>
        <img className='w-[80px] h-[80px]' src='images/Iconone.png' />
          <div className='flex flex-col w-[230px] h-[92px] ml-[24px]'>
            <div className='w-[110px] h-[60px] font-sans font-[700] text-[40px] text-white leading-[150%]'>10M+</div>
            <div className='text-[#E0E0E0] leading-[20px] tracking-[0.01em] font-[400] font-[16px] font-sans w-[230px] h-[28px] mt-[4px]'>Trusted Wallets Investor</div>
          </div>
        </div>
        <div className='w-[334px] h-[92px] flex flex-row'>
        <img className='w-[80px] h-[80px]' src='images/Icontwo.png' />
          <div className='flex flex-col w-[230px] h-[92px] ml-[24px]'>
            <div className='w-[110px] h-[60px] font-sans font-[700] text-[40px] text-white leading-[150%]'>195</div>
            <div className='text-[#E0E0E0] leading-[20px] tracking-[0.01em] font-[400] font-[16px] font-sans w-[230px] h-[28px] mt-[4px]'>Countries Supported</div>
          </div>
        </div>
      </div>

      <section className='grid lg:grid-cols-2'>
        <div className='max-w-[604px] h-[585.15px] mt-[40px] xl:mt-[63px] mx-auto xl:ml-[120px] lg:ml-[50px]'>
          <img className='justify-self-center' src='images/Illustration2.png'/>
        </div>

        <div id='value-proposition' className='max-w-[588px] mt-[40px] xl:mr-[120px] xl:mt-[146px] mx-auto lg:mr-[50px]'>
      <p className='text-white leading-[76px] text-[64px] font-sans font-[700] mt-[28px]'>Why you should choose CRAPPO</p>
      <p className='leading-[28px] text-[#E0E0E0] tracking-[0.01em] font-[16px] font-[400] w-[435px] h-[56px] mt-[24px]'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
      <button className='flex flex-row justify-center items-center py-[16px] pr-[16px] pl-[12px] gap-[24px] w-[202px] h-[64px] mt-[32px] bg-[#3671E9] rounded-[32px]'>
         <div className='w-[106px] h-[27px] font-sans font-[500] font-[18px] leading-[150%] text-center text-white'>Learn More</div>
      </button>
    </div>
      </section>
    </div>
  )
}

export default Crappo