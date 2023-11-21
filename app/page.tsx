import Image from 'next/image'
import Intro from './components/Intro'
import Creon from './components/Creon'
import Profiting from './components/Profiting'
import Vision from './components/Vision'
import Token from './components/Token'
import Market from './components/Market'
import Footer from './components/Footer'

export default function Home() {
  return (
  <div className='bg-black text-white'>
    <Intro/>
    <div className='flex flex-col'>
    <div className='xl:order-first order-4'><Creon/></div>
    <div className='xl:order-2 order-2'><Profiting/></div>
    <div className='xl:order-3 order-first'><Vision/></div>
    <div className='xl:order-4 order-5'><Token/></div>
    <div className='xl:order-5 order-3 '><Market/></div>
    </div>
    <Footer/>
  </div>
  )
}
