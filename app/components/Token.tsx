import Image from "next/image"
import Container from "./Container"
import token from '@/public/images/cs.png'
import token2 from '@/public/images/cs2.png'
import token3 from '@/public/images/cs3.png'

const Token = () => {
  return (
        <Container>
            <div className="token lg:grid lg:grid-cols-3 flex gap-5 xl:px-[14rem] lg:px-0 pt-8 overflow-x-auto overflow-hidden">
                <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
                    <h1 className="text-[24px] pt-4 px-2 w-full text-left">TOKEN</h1>
                    <p className="font-[400] italic text-xs w-full text-left px-2 pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">The Gateway token to the world of AI</p>
                    <div className="pr-4 py-2 w-full">
                    <Image src={token} alt="" className="w-full object-cover" style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}} />
                    </div>
                    <p className="font-[700] italic text-xs px-2 pb-6">Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.</p>
                    <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">COMING SOON</span>
                </div>
                <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
                    <h1 className="text-[24px] pt-4 px-2 w-full text-left">REVENUE</h1>
                    <p className="font-[400] italic text-xs w-full text-left px-2 xl:pb-0 lg:pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">Driving income and growth through decentralization</p>
                    <div className="pr-4 py-2 w-full">
                    <Image src={token2} alt="" className="w-full object-cover" style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}} />
                    </div>
                    <p className="font-[700] italic text-xs px-2 pb-6">CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.</p>
                    <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">COMING SOON</span>
                </div>
                <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
                    <h1 className="text-[24px] pt-4 px-2 w-full text-left">LAUNCHPAD</h1>
                    <p className="font-[400] italic text-xs w-full text-left px-2 pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">Driving the future of AI Innovation</p>
                    <div className="pr-4 py-2 w-full">
                    <Image src={token3} alt="" className="w-full object-cover" style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}} />
                    </div>
                    <p className="font-[700] italic text-xs px-2 pb-6">The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.</p>
                    <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">COMING SOON</span>
                </div>
            </div>
        </Container>
  )
}

export default Token