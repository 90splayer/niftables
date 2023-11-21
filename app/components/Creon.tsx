import React from 'react'
import Container from './Container'
import Image from 'next/image'
import image1 from '@/public/images/phone.png'

const Creon = () => {
  return (
      <Container>
        <div className='flex flex-col gap-8 items-start xl:px-[14rem] lg:px-0 py-14'>
        <h1 className='lg:hidden md:flex hidden text-[39px] leading-[2.9rem]'>CREON PASS NFT</h1>
        <h1 className='md:hidden flex text-[39px] leading-[2.9rem]'>CREON PASS<br/> NFT</h1>
        <p className='lg:hidden flex font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.</p>
        <Image className='md:hidden w-full object-contain' src={image1} alt='' />
        <div className='md:grid md:grid-cols-6 lg:grid lg:grid-cols-2 lg:items-center gap-4 text-white items-start'>
          <div className='w-full md:col-span-2 lg:col-span-1 flex flex-col gap-8 items-start justify-center'>
            <h1 className='lg:flex hidden text-[39px] leading-[2.9rem]'>CREON PASS<br/> NFT</h1>
            <p className='xl:flex hidden font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
            <p className='xl:hidden lg:flex hidden font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.</p>
            <ul className='xl:hidden font-[700] italic text-xs lg:flex md:hidden flex flex-col gap-2'>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.</li>
              <ul className='flex gap-2'>
              <li className='border py-1 px-2 rounded border-[#13171D]'>The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Early access to allocations in inspiring tokenized projects, real businesses based on AI.</li>
              </ul>
            </ul>
            <ul className='hidden font-[700] italic text-xs xl:flex flex-col gap-2'>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Pre-launch investment opportunities for upcoming AI projects</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Free and early access to Creon built AI projects</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Higher allocation limits on the Creon AI Launchpad</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Revenue share distribution from Creon built AI projects</li>
            </ul>
            <ul className='lg:hidden md:flex col-span-2 font-[700] italic text-xs hidden flex-col gap-8'>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Early access to allocations in inspiring tokenized projects, real businesses based on AI.</li>
            </ul>
            <span className='font-[400] italic text-xs text-center bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] lg:w-[50%] w-full py-2 rounded'>Buy Creon Pass</span>
          </div>
          <Image className='md:flex hidden lg:col-span-1 md:col-span-4 w-full object-contain' src={image1} alt='' />
          </div>
        </div>
        {/* <div className='lg:hidden flex flex-col gap-8 items-start py-14'>
            <h1 className='text-[39px] leading-[2.9rem]'>CREON PASS NFT</h1>
            <p className='xl:hidden font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.</p>
            <div className='grid grid-cols-6 gap-4 text-white items-start'>
            <ul className='col-span-2 font-[700] italic text-xs flex flex-col gap-8'>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.</li>
              <li className='border py-1 px-2 rounded border-[#13171D]'>Early access to allocations in inspiring tokenized projects, real businesses based on AI.</li>
              <span className='font-[400] italic text-xs text-center bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] w-full py-2 rounded'>Buy Creon Pass</span>
            </ul>
            <Image className='col-span-4 w-full object-contain' src={image1} alt='' />
          </div>
        </div> */}
      </Container>
  )
}

export default Creon