import React from 'react'
import Container from './Container'
import Image from 'next/image'
import market from '@/public/images/ls.png'
import market2 from '@/public/images/ls2.png'
import market3 from '@/public/images/ls3.png'
import bg from '@/public/images/link.png'

const Market = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }}
    className=' bg-cover' 
    >
        <Container>
            <ul className='w-full hidden md:flex flex-col xl:px-[14rem] lg:px-0 gap-4'>
                <li className='w-full grid grid-cols-6 items-center bg-[#13171D] bg-opacity-60'>
                    <div className='flex flex-col p-4 col-span-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE</h1>
                        <p className='font-[700] italic text-xs'>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
                    </div>
                    <Image src={market} alt='' className='col-span-2  w-full h-auto object-cover' />
                </li>
                <li className='grid grid-cols-6 items-center justify-center bg-[#13171D] bg-opacity-60'>
                    <div className='flex flex-col p-4 col-span-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI TOOLS AND MARKET</h1>
                        <p className='font-[700] italic text-xs'>AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.</p>
                    </div>
                    <Image src={market2} alt='' className='col-span-2 w-full h-auto object-cover'/>
                </li>
                <li className='grid grid-cols-6 items-center justify-center bg-[#13171D] bg-opacity-60'>
                    <div className='flex flex-col p-4 col-span-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI, CRYPTO, AND NFT MARKET</h1>
                        <p className='font-[700] italic text-xs'>Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.</p>
                    </div>
                    <Image src={market3} alt='' className='col-span-2 w-full h-auto object-cover'/>
                </li>
            </ul>
            <ul className='market w-full md:hidden flex overflow-x-auto xl:px-[14rem] lg:px-0 gap-4'>
                <li className='flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60'>
                <Image src={market} alt='' className='w-full h-auto object-cover' />
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE</h1>
                        <p className='font-[700] italic text-xs'>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
                    </div>
                </li>
                <li className='flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60'>
                <Image src={market2} alt='' className='w-full h-auto object-cover'/>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI TOOLS AND MARKET</h1>
                        <p className='font-[700] italic text-xs'>AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.</p>
                    </div>
                </li>
                <li className='flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60'>
                <Image src={market3} alt='' className='w-full h-auto object-cover'/>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='xl:text-[23px] lg:text-[33px] lg:leading-[2rem]'>AI, CRYPTO, AND NFT MARKET</h1>
                        <p className='font-[700] italic text-xs'>Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.</p>
                    </div>
                </li>
            </ul>
        </Container>
    </div>
  )
}

export default Market