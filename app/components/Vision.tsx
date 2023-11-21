import Image from "next/image"
import Container from "./Container"
import vimg from '@/public/images/Image.png'
import vimg1 from '@/public/images/icon-1.png'
import vimg2 from '@/public/images/icon-2.png'
import vimg3 from '@/public/images/icon-3.png'
import vimg4 from '@/public/images/icon.png'
import { RiArrowDropDownLine } from "react-icons/ri";

const Vision = () => {
  return (
        <Container>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start xl:px-[14rem] lg:px-0 py-16">
                <div className="col-span-1 flex flex-col items-start justify-center gap-2">
                    <div className="xl:flex hidden">
                    <p className=" text-[21px] leading-[2rem]">OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS</span></p>
                    </div>
                    <p className="xl:hidden lg:flex hidden text-[21px] leading-[2rem] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">OUR MISSION IS TO PROVIDE UNIQUE, CONFIDENTIAL AI-BASED TOLS, TO WHICH YOU WILL GAIN LIFETIME ACCESS THROUGH NFT TOKENS AND OUR CREON TOKEN.</p>
                    <p className="lg:hidden text-[21px] leading-[2rem] z-10">OUR MISSION IS TO PROVIDE UNIQUE, CONFIDENTIAL AI-BASED TOLS, TO WHICH YOU WILL GAIN <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">LIFETIME ACCESS THROUGH NFT TOKENS AND OUR CREON TOKEN.</span></p>
                    <Image src={vimg} alt="" className="md:hidden lg:flex flex mt-[-28px] md:mt-0 md:ml-0 ml-[96px] lg:ml-32 "/>
                </div>
                <div className="w-full xl:col-span-1 lg:flex md:grid md:grid-cols-6 md:gap-4 lg:pt-0 md:pt-8">
                <ul className="md:col-span-4 lg:col-span-1 flex flex-col items-start justify-center gap-2 w-full lg:pl-24">
                    <li className="flex items-center justify-between w-full"> 
                    <div className="flex items-center justify-start gap-2">
                        <Image src={vimg4} alt="" className="w-[50px] object-contain"/>
                        <h1 className="font-[400] italic text-sm">Profitability and Growth</h1>
                    </div>
                        <RiArrowDropDownLine className="rotate-180"/>
                       </li>
                       <p className="border-b pb-4 border-[#13171D] font-[700] italic text-xs pl-14">At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.</p>                      
                    
                    <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
                    <div className="flex items-center justify-start gap-2">
                        <Image src={vimg1} alt="" className="w-[50px] object-contain"/>
                        <h1 className="font-[400] italic text-sm">Transparent & Fair Decentralized Earnings</h1>
                    </div>
                        <RiArrowDropDownLine />
                    </li>
                    <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
                    <div className="flex items-center justify-start gap-2">
                        <Image src={vimg2} alt="" className="w-[50px] object-contain"/>
                        <h1 className="font-[400] italic text-sm">Launching the future</h1>
                        </div>
                        <RiArrowDropDownLine />
                    </li>
                    <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
                    <div className="flex items-center justify-start gap-2">
                        <Image src={vimg3} alt="" className="w-[50px] object-contain"/>
                        <h1 className="font-[400] italic text-sm">Limitless Possibilities of AI & Crypto</h1>
                        </div>
                        <RiArrowDropDownLine />
                    </li>
                </ul>
                <div className="md:col-span-2 md:flex lg:hidden relative">
                <Image src={vimg} alt="" className="md:flex lg:hidden hidden absolute bottom-0 left w-full h-auto object-contain"/>
                </div>
                </div>
            </div>
        </Container>
  )
}

export default Vision