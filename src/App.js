import React from 'react'
import Header from './components/Header'
import Crappo from './components/Crappo'
import Check from './components/Check'
import Calculate from './components/Calculate'
import Cryptocurrencies from './components/Cryptocurrencies'
import Startming from './components/Startming'
import Footer from './components/Footer'




function App() {
  return (
    
 <div className='bg-[#0D0D2B] lg:mt-[0px]'>
      
   <Header />
   <Crappo />
   <Check />
   <Calculate />
   <Cryptocurrencies />
   <Startming />
   <Footer />
 </div>
    
  )
}

export default App